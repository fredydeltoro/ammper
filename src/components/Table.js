import React from "react";
import base64 from "next-base64";

async function getTransactions() {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Basic ${base64.encode(
      process.env["BELVO_SECRET_ID"] + ":" + process.env["BELVO_SECRET_PSW"]
    )}`
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(
      `https://sandbox.belvo.com/api/transactions/?page=1&link=${process.env["BELVO_ID"]}`,
      requestOptions
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return { error };
  }
}

export default async function Table() {
  const transactions = await getTransactions();

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
            <tr>
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
    </div>
  );
}
