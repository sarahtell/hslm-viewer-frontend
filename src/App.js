<<<<<<< HEAD
import axios from "axios"
import React from "react"

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    const response = axios
    .get('http://127.0.0.1:5000/', {headers: "Bearer 12903109230+912309+1" })
    .then(response => {
      console.log(response)
      setData(response.data)

    })
    setIsLoading(false)
  },[]);

console.log(process.env.REACT_APP_SARAH)
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
    {data.hej}
=======

function App() {
  return (
    <div>
    hej
>>>>>>> 0c7ed9ee7cbfb5864b49b2da8c4f270575c31d13
    </div>
  );
}

export default App;
