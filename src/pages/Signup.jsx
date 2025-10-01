import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("success")
    );
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="signup-container">
        <h2>Signup</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button onClick={createUser}>Sign Up</button>
      </div>
    </>
  );
};

export default SignupPage;
