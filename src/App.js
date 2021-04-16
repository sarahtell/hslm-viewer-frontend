import React from "react"
import Form from './components/Form'

const App = () => {

  const [data, setData] = React.useState({})
  console.log(data)
  return (
    <div className="flex flex-col items-center bg-green-100 min-h-screen">
    <h1 className="text-3xl p-8">Bridge response simulator</h1>
    <Form setData={setData}/>
    {/* <Graph data={data}/> */}
    </div>
  );
}

export default App;
