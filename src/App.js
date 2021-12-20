import logo from './AcomLogo.jpg'
import React, { useState } from 'react'
import LoginForm from "./components/LoginForm";
import './css/main.css'

function App() {
    const adminUsers = {
        email: "azamat@mail.com",
        password: "123",
    }
    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email === adminUsers.email && details.password === adminUsers.password) {
            console.log("uraaa");
            setUser({
                name: details.name,
                email: details.email
            });
        } else {
            console.log("tugadi")
            setError(alert("Noto'g'ri Parol"))
        }
    }
    const Logout = () => {
        setUser({name: "", email: ""});
    }

    return (
        <div className="App">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    );
}

export default App