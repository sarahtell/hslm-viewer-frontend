import React from "react"
import Form from './components/Form'

const App = () => {

  const [data, setData] = React.useState({})

  return (
    <div className="flex flex-col items-center">
    HELLO A FRONTEND!
    <Form setData={setData}/>
    {/* <Graph data={data}/> */}
    </div>
  );
}

export default App;
