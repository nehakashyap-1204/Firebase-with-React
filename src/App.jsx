import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Signup";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <SignupPage />
    </div>
  );
}

export default App;
