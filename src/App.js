import HomePage from "./routes/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignInPage from "./routes/SignIn/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
