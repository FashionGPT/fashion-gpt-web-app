import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from "prop-types";
const Auth0ProviderWithHistory = ({ children }) => {
    const domain = "https://dev-j5pmklqwaj4ptq8b.us.auth0.com";
    const clientId = "F4NsNddrnOmihw56MlqRv3RBxlmP55V0";
    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

Auth0ProviderWithHistory.propTypes = {
    children: PropTypes.node.isRequired
}
export default Auth0ProviderWithHistory;