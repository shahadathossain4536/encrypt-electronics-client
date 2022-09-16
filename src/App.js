import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import Footer from "./Pages/Shared/Footer";
import SignIn from "./Pages/Auth/SignIn";
import NotFound from "./Pages/Shared/NotFound";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import SingUp from "./Pages/Auth/SingUp";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SingUp />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
