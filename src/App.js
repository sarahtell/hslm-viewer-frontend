import React from "react"
import Form from './components/Form'

const App = () => {

  const [data, setData] = React.useState({})
  console.log(data)
  return (
    <div className="flex flex-col items-center align-middle justify-center">
    Bridge response simulator
    <Form setData={setData}/>
    {/* <Graph data={data}/> */}
    </div>
  );
}

export default App;
