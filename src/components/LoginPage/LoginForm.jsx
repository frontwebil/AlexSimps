import { useState } from "react";
import { USERS } from "../../../consts/users";

export function LoginForm({ setCurrentUser }) {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginFormStatus, setloginFormStatus] = useState("");

  function loginButton(e) {
    e.preventDefault();

    setloginFormStatus("");

    if (!loginValue && !passwordValue) {
      setloginFormStatus("Login and password are mandatory!");
      return;
    }

    if (loginValue.length < 5) {
      setloginFormStatus("Login must contain at least 5 characters");
      return;
    }

    if (passwordValue.length < 6) {
      setloginFormStatus("Password must contain at least 6 characters");
      return;
    }

    const user = USERS.find((el) => {
      return el.login === loginValue && el.password === passwordValue;
    });

    if (user) {
      setCurrentUser(user);
      setPasswordValue("");
      setLoginValue("");
    } else {
      setloginFormStatus("Incorrect login or password");
      return;
    }
  }

  return (
    <form className="login-form">
      <input
        type="text"
        className="login-form-input"
        placeholder="Login"
        autoComplete="on"
        value={loginValue}
        onChange={(e) => {
          setLoginValue(e.target.value);
        }}
      />
      <input
        type="password"
        className="login-form-input"
        placeholder="Password"
        value={passwordValue}
        autoComplete="current-password"
        onChange={(e) => {
          setPasswordValue(e.target.value);
        }}
      />
      <p className="status-form-login">{loginFormStatus}</p>
      <button type="submit" className="login-form-button" onClick={loginButton}>
        Login
      </button>
    </form>
  );
}
