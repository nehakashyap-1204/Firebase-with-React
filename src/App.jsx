import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import SignupPage from "./pages/Signup";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "nehakashyap@gmail.com",
      "nehakashyap@123"
    ).then((value) => console.log(value));
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <SignupPage />
      <button onClick={signupUser}>Create User</button>
    </div>
  );
}

export default App;
