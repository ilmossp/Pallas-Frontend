import { useQuery } from "react-query";
import Layout from "./components/Layout";
import { getQueue } from "./lib/api";

const App = () => {
  const { data, isSuccess } = useQuery("getQueue", getQueue);
  return <Layout></Layout>;
};

export default App;
