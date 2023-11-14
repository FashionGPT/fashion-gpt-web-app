import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Nav from "./components/Navbar/Nav";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history.jsx";
import PromptPage from './components/PromptPage/PromptPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Auth0ProviderWithHistory>
                <Nav />
                <App />
            </Auth0ProviderWithHistory>
        </div>,
    },
    {
        path: "/sign-in",
        element: <div>TODO: sign in page</div>,
    },
    {
        path: "/sign-up",
        element: <div>TODO: sign up page</div>,
    },
    {
        path: "/prompt",
        element: <PromptPage/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <Auth0ProviderWithHistory>
                <Nav />
                <App />
            </Auth0ProviderWithHistory>
        </RouterProvider>
    </React.StrictMode>,
)