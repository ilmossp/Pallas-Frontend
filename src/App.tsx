import { useQuery } from "react-query";
import Layout from "./components/Layout";
import { getQueue } from "./lib/api";
import PieChart from "./components/PieChart";
import Stats from "./components/Stats";
import Table from "./components/Table";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { data, isSuccess } = useQuery("getQueue", getQueue, { retry: true });

  return (
    <Layout>
      <Toaster />
      <main className="p-5 bg-base-200">
        {!isSuccess && (
          <span className="loading loading-infinity loading-lg"></span>
        )}
        {isSuccess && (
          <div className="space-y-5">
            <div className="flex gap-5 justify-stretch">
              <PieChart
                queue={data}
                title="Protocols"
                element="proto"
              ></PieChart>
              <PieChart
                queue={data}
                title="Services"
                element="service"
              ></PieChart>
              <Stats queue={data}></Stats>
            </div>
            <Table queue={data}></Table>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default App;
