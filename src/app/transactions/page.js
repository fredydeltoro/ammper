import React from "react";
import Table from "@/components/Table";

export default function page() {
  return (
    <>
      <h3 style={{ marginBottom: "25px", color: "#ed4036" }}>Transactions</h3>
      <Table limit={15} pagination={true} />
    </>
  );
}
