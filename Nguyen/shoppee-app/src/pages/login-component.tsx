import React from "react";
// import Button from '@material-ui/Button';
import Button from '@mui/material/Button';
// import Container from '@material-ui/Container';
import Container from '@mui/material/Container';
// import TextField from '@material-ui/TextField';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import Box from '@material-ui/Box';
import '../assets/css/login.css'
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { GoogleLogin } from 'react-google-login';

// import Button from '@mui/material/Button';
interface LoginComponentProps {
    setLoggedIn: (isLoggedIn: boolean) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ setLoggedIn }) => {
    const [isLoginTab, setIsLoginTab] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    const [ggAccount, setGGAccount] = useState("");

    const clientId = "1008439647437-nal3adv2m1m9l2ckshotpohrdst55ace.apps.googleusercontent.com";
    const responseGoogle = (response: any) => {
        if (response.profileObj) {
            localStorage.setItem('account', JSON.stringify(response.profileObj));
            setLoggedIn(true);
        }
    };
    const handleLogin = () => {
        setError("Username/Password cannot be empty");
        console.log(error);
        var isLogable = true;
        if (username === "" || password === "") {
            setError("Username/Password cannot be empty \n");
            isLogable = false;
        }
        else {
            setError("");
        }
        if (!localStorage.getItem("account")) {
            setError("You haven't regist account \n");
            isLogable = false;
        }
        else {
            setError("");
        }
        if (isLogable) {
            setLoggedIn(true);
            console.log("have change to true");
            // <Navigate to="/" />
        }
    }
    const handleSignUp = () => {
        var registable = true;
        setError("");

        if (username === "" || password === "" || confirm === "") {
            setError("Username/Password cannot be empty \n");
            registable = false;
        }
        if (password !== confirm) {
            setError((prev) => prev.concat("Password and confirm password are not match"));
            registable = false;
        }
        if (registable === true) {
            localStorage.setItem("account", username)
        }
    }
    const changeIsLoginTab = () => {
        setError("");
        setIsLoginTab(!isLoginTab);
    }
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#1cbb9d",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }} >
            <Box alignItems="center" sx={{
                backgroundColor: "white",
                width: "60%",
                borderRadius: "10px"
            }}>
                <Container className="col-center" maxWidth="sm" >
                    <h3 className="textCenter">{isLoginTab ? "Login" : "Create account"}</h3>
                    <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} id="Username" label="username" variant="outlined" />
                    <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="Password" label="password" variant="outlined" />
                    {!isLoginTab && <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)} id="confirm" label="confirm password" variant="outlined" />}
                    <p>{isLoginTab ? "Haven't have an account yet ?" : "Already have an account ?"} <span className="regist" onClick={changeIsLoginTab}>{isLoginTab ? "Regist now" : "Log in now"}</span></p>
                    <p className="error">{error ? error : ""}</p>
                    <div className="row-center pb-1"><Button startIcon={<SendIcon />} variant="contained" color="primary" onClick={isLoginTab ? handleLogin : handleSignUp}>{isLoginTab ? "Login" : "Sign up"}</Button></div>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Container>
            </Box>
        </Box>
    )
}

export default LoginComponent;