import React from "react";
import Table from "@/components/Table";

export default function page() {
  return (
    <>
      <h3>Transactions</h3>
      <Table limit={15} pagination={true} />
    </>
  );
}
