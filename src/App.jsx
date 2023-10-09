import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    function Redirect() {
        window.location.assign("http://localhost:5173/api/auth/login");
    }

    return (
    <>
      <h1>Fashion-GPT</h1>
      <div className="card">
        <button onClick={() => Redirect()}>
          Login
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Login for Auth0
      </p>
    </>
  )
}

export default App
