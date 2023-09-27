"use client";

import { useEffect, useState } from "react";
import base64 from "next-base64";
import Paginator from "./Paginator";

export default function Table() {
  const [transactions, setTransactions] = useState({ results: [] });
  const [currentPage, setPage] = useState(1);
  const getTransactions = async (page = 1) => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Basic ${base64.encode(
        process.env["NEXT_PUBLIC_BELVO_SECRET_ID"] +
          ":" +
          process.env["NEXT_PUBLIC_BELVO_SECRET_PSW"]
      )}`
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `https://sandbox.belvo.com/api/transactions/?page_size=10&page=${page}&link=${process.env["NEXT_PUBLIC_BELVO_ID"]}&account=${process.env["NEXT_PUBLIC_BELVO_CURRENT_ACCOUNT"]}`,
        requestOptions
      );

      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      setTransactions({ error });
    }
  };

  useEffect(() => {
    getTransactions(currentPage);
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Concept</th>
            <th scope="col">Caregory</th>
            <th scope="col">Inflow</th>
            <th scope="col">Outflow</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.results?.map((row) => (
            <tr key={row.id}>
              <td>{row.value_date}</td>
              <td>
                <a href={row.merchant.website}>{row.merchant.name}</a>
                <br />
                <span>{row.description}</span>
              </td>
              <td>{row.category}</td>
              <td>
                {row.type === "INFLOW" ? `${row.amount} ${row.currency}` : ""}
              </td>
              <td>
                {row.type === "OUTFLOW" ? `${row.amount} ${row.currency}` : ""}
              </td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        count={transactions.count}
        pageSize={10}
        currentPage={currentPage}
        fetchData={getTransactions}
        setPage={setPage}
      />
    </div>
  );
}
