import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignIn from "./Pages/SignIn/SignIn";
import Footer from "./Pages/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
