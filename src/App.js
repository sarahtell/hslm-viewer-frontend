import React from "react";
import Form from "./components/Form";
import Chart from "./components/Chart";
import Layout from "./components/Layout";

const App = () => {
  const [data, setData] = React.useState({time_vector: [1,2,3], bridge_displacement: [-1,0,1]});
  const [loading, setIsLoading] = React.useState(false);

  return (
    <Layout>
      <h1 className="text-3xl p-8">Bridge response simulator</h1>
      <Form setData={setData} setIsLoading={setIsLoading} loading={loading} />
      <h1 className="text-black font-sans text-5xl m-10">Displacement at midspan</h1>
          <Chart
            bridge_displacement={data.bridge_displacement}
            time_vector={data.time_vector}
          />
    </Layout>
  );
};

export default App;
