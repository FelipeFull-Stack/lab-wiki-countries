import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Menu } from "./components/Menu"
import { CountryPage } from "./pages/CountryPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <Menu />
        <Routes>
          <Route path="/:countryCode" element={<CountryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
