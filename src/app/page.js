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

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
}
