import { useState } from "react";
import { useFirebase } from "./context/Firebase";

function App() {
  const firebase = useFirebase();
  // console.log(firebase);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Password"
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("users/" + "nehaKashyap", { email, password });
        }}
      >
        Sign up
      </button>
    </div>
  );
}

export default App;
