import { useQuery } from "react-query";
import Layout from "./components/Layout";
import { getQueue } from "./lib/api";
import PieChart from "./components/PieChart";

const App = () => {
  const { data, isSuccess, isLoading } = useQuery("getQueue", getQueue);

  return (
    <Layout>
      <main className="p-5">
        {isLoading && (
          <span className="loading loading-infinity loading-lg"></span>
        )}
        {isSuccess && (
          <div className="flex gap-5">
            <PieChart queue={data} title="Protocols" element="proto"></PieChart>
            <PieChart
              queue={data}
              title="Services"
              element="service"
            ></PieChart>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default App;
