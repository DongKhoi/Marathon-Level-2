import React from "react";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import '../assets/css/login.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";

// import Button from '@mui/material/Button';
interface LoginComponentProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginComponent : React.FC<LoginComponentProps> =({ setIsLoggedIn })=>{
    const [isLoginTab , setIsLoginTab] = useState(true);
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [confirm , setConfirm] = useState("");
    const [error , setError] = useState("");
    const handleLogin=()=>{
        var isLogable =true;
        if(username==="" || password ===""){
            setError("Username/Password cannot be empty");
            isLogable=false;
        }
        else {
            setError("");
        }
        if(!localStorage.getItem("account")){
            setError("You haven't regist account");
            isLogable=false;
        }
        else {
            setError("");
        } 
        if(isLogable){
            setIsLoggedIn(true);
            <Navigate to="/" />
        }
    }
    const handleSignUp=()=>{
        var registable =true;
        if(username==="" || password ==="" ||confirm ===""){
            setError("Username/Password cannot be empty");
            registable=false;
        }
        else{
            setError("");
        }
        if(password !==confirm){
            setError((prev)=>prev.concat("Password and confirm password are not match"));
            registable=false;
        }
        else{
            setError("");
        }
        if(registable===true){
            localStorage.setItem("account",username)
        }
    }
    const changeIsLoginTab = ()=>{
        setError("");
        setIsLoginTab(!isLoginTab);
    }
    return (
      <Container className="col-center" maxWidth="sm" >
            <h3>{isLoginTab ? "Login" : "Create account"}</h3>
            <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} id="Username" label="username" variant="outlined" />
            <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="Password" label="password" variant="outlined" />
            {!isLoginTab && <TextField className="d-block w-100" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirm(e.target.value)} id="confirm" label="confirm password" variant="outlined" />}
            <p>{isLoginTab ? "Haven't have an account yet ?" : "Already have an account ?"} <span className="regist" onClick={changeIsLoginTab}>{isLoginTab ? "Regist now" : "Log in now"}</span></p>
            <p className="error">{error?error : ""}</p>
            <Button variant="contained" color="primary" onClick={isLoginTab ? handleLogin : handleSignUp}>{isLoginTab ? "Login" : "Sign up"}</Button>
      </Container>
    )
}

export default LoginComponent;