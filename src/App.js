import React from "react";
import Form from "./components/Form";
import Chart from "./components/Chart";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = React.useState({time_vector: [1,2,3], bridge_acceleration: [-1,0,1]});
  const [loading, setIsLoading] = React.useState(false);

  return (
    <Layout className="flex bg-gradient-to-b flex-col items-center min-h-screen">
      <h1 className="text-3xl p-8">Bridge response simulator</h1>
      <Form setData={setData} setIsLoading={setIsLoading} loading={loading} />
        <Chart
          bridge_acceleration={data.bridge_acceleration}
          time_vector={data.time_vector}
        />
    </Layout>
  );
};

export default App;
