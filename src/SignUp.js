import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext";

import "./SignUp.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      seterror("Passwords do not match");
    } else if (passwordRef.current.value.length < 6) {
      console.log(passwordRef.current.value.length);
      seterror("Password length should be more than 5");
    } else {
      try {
        seterror("");
        setloading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        history.push("/");
      } catch (error) {
        console.log(error.code);
        seterror(error.code);
        setloading(false);
      }
    }
  }

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {error && <div className="error">{error}</div>}
        <p className="details">Email</p>
        <input type="text" ref={emailRef} />
        <p className="details">Password</p>
        <input type="text" ref={passwordRef} />
        <p className="details">Confirm Password</p>
        <input type="text" ref={confirmPasswordRef} />
        <button disabled={loading}>
          {loading ? "loading..." : " Sign up"}
        </button>
        <p id="login-redirect">
          Already have an account?<Link to="/signin">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
