import HomePage from "./routes/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AuthenticationPage from "./routes/Authentication/AuthenticationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="sign-in" element={<AuthenticationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
