import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMenu from "./components/NavbarMenu";
import About from "./pages/About";


function App() {
  return (
    <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
  );
}

export default App;
