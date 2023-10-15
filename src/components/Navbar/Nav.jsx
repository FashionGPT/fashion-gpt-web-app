import "./Nav.css";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "../Profile/Profile.jsx";

function Nav() {
  const { logout, loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="navbar">
        <a href="/" className="title">
          Fashion-GPT
        </a>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out</button>
        <Profile />
      </div>
    </div>
  );
}

export default Nav;
