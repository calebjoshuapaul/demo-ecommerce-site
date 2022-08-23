import HomePage from "./routes/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AuthenticationPage from "./routes/Authentication/AuthenticationPage";
import ShopPage from "./routes/Shop/ShopPage";
import ContactPage from "./routes/Contact/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="sign-in" element={<AuthenticationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
