// import styles from "@/app/ui/login/login.module.css";
"use client"
import './login.css'
import LoginForm from "./loginForm/LoginForm";

const LoginPage= () => {
  return (
    <div className={"login-container"}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;