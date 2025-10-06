import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinuser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Sign in successfull!"), setEmail(""), setPassword(""))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="signup-container">
        <h2>Sign in</h2>
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
        <button onClick={signinuser}>Sign Up</button>
      </div>
    </>
  );
}

export default Signin;
