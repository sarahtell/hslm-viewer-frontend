import React from "react"
import Form from './components/Form'

const App = () => {

  const [data, setData] = React.useState({})
  const [loading, setIsLoading] = React.useState(true)
  console.log(data, loading);
  return (
    <div className="flex flex-col items-center bg-green-100 min-h-screen">
    <h1 className="text-3xl p-8">Bridge response simulator</h1>
    <Form setData={setData} setIsLoading={setIsLoading}/>
    {/* <Graph data={data}/> */}
    {loading ?  <h1>Loading...</h1> : <h1>{data.mass}</h1>}
    </div>
  );
}

export default App;
