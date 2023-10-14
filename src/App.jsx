import { useState } from 'react'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0)
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

    return (
    <>
      <h1>Fashion-GPT</h1>
      <div className="card">
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out</button>
      </div>
      <p className="read-the-docs">
        Click on the Login for Auth0
      </p>
    </>
  )
}

export default App
