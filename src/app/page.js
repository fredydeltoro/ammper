import styles from "./page.module.css";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>
          <img
            src="https://ammper.com/wp-content/uploads/2020/07/logo-ammper-energia-mexico.png"
            alt=""
          />
        </h1>
      </header>

      <div className={`container ${styles.content}`}>
        <div className="row">
          <div className="col-12">
            <h3>Transactions</h3>
            <Table />
            <a href="/transactions">See Full</a>
          </div>
        </div>
      </div>
    </main>
  );
}
