import { QueryClientProvider, QueryClient } from "react-query";
import Layout from "./components/Layout";
import Hello from "./components/Hello";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hello />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
