import "../src/index.css";
import { HashRouter, Routes, Route, Router } from "react-router";
import Shop from "./pages/Shop";
import Landing from "./pages/landing";
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
//import merchantDashboard from "./pages/merchantdashboard";
import { useState } from "react";
import Nav from "./Components/nav";

export default function App() {

    const [userDatabase, setUserDatabase] = useState([]);

  return (
    <HashRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
         <Route
          path="/signup"
          element={
            <Signup
      userDatabase={userDatabase}
      setUserDatabase={setUserDatabase}
    />
          }
        />
         <Route
          path="/login"
          element={
            <LoginPage data={userDatabase} />
          }
        />
        {/* <Route path="/merchant" element={<merchantDashboard/>} /> */}
      </Routes>
    </HashRouter>
  );
}
