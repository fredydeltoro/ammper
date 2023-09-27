import styles from "./page.module.css";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3>Transactions</h3>
          <Table />
          <a href="/transactions">See Full</a>
        </div>
      </div>
    </>
  );
}
