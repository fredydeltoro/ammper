import Table from "@/components/Table";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Card title="Transactions">
            <Table />
            <a className="btn btn-primary card-ctrl" href="/transactions">
              See Full
            </a>
          </Card>
        </div>
      </div>
    </>
  );
}
