import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // demo talking to the server:
    fetch('http://localhost:3000/api')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>setError(err.message))
  }, []);

  return (
    <>
      <h1>Hello React</h1>
      {/* conditional rendering */}
      {/* short circuit and */}
      {error && <p>{error}</p>}
      {data && <p>{data.message}</p>}
    </>
  )
}

export default App
