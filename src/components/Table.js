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
            <th scope="col">Outflow</th>
            <th scope="col">Inflow</th>
          </tr>
        </thead>
        <tbody>
          {transactions.results?.map(() => (
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
