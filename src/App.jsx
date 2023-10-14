import React from 'react'
import './App.css'
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const { user, error, isLoading } = useAuth0()
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        return (
            <div>
                <h1>
                    Welcome {user.name}!
                </h1>
            </div>
        );
    }
    return (
        <div>
            <h1>
                Welcome to Fashion-GPT, please LOGIN first for the service!
            </h1>
        </div>
    );
}
export default App;
