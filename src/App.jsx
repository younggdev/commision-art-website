import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Samples from "./pages/Samples";
import Terms from "./pages/Terms";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/samples" element={<Samples />} />
      </Routes>
    </>
  );
}

export default App;
