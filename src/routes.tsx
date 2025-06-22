import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";
import Home from "./pages/Home";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
