import "./Nav.css";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "../Profile/Profile.jsx";

function Nav() {
  const { logout, loginWithRedirect } = useAuth0();

  return (
      <div className="navbar">
        <ul>
          <li><a href="/">FashionGPT</a></li>
          <li><a style={{justifyContent: "right"}} onClick={() => loginWithRedirect()}>Log In</a></li>
          <li><a style={{justifyContent: "right"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out</a></li>
        </ul>

        <Profile />
      </div>
  );
}

export default Nav;
