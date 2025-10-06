import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Signup";
import Signin from "./pages/Signin";

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      {/* <SignupPage /> */}
      <Signin/>
    </div>
  );
}

export default App;
