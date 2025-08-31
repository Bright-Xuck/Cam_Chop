import "../src/index.css";
import { HashRouter, Routes, Route, Router } from "react-router";
import Shop from "./pages/Shop";
import Landing from "./pages/landing";
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
import Merchant from "./pages/merchantdashboard";
import { useState } from "react";
import Nav from "./Components/nav";
import Merchantlayout from "./Components/merchantLayout";
import Customerlayout from "./Components/customerlayout";
import Additem from "./Components/Additem";
import SignupMerchant from "./Components/SignupMerchant";
import LoginMerchant from "./Components/LoginMerchant";
import {merchants} from "./data/merchants";
import MenuManager from "./Components/MenuManager";
import AddMenu from "./Components/AddMenu";


export default function App() {
  const [userDatabase, setUserDatabase] = useState([]);
  const [merchantDatabase, setMerchantDatabase] = useState(merchants)

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Customerlayout>
              <Landing />
            </Customerlayout>
          }
        />
        <Route
          path="/shop"
          element={
            <Customerlayout>
              <Shop />
            </Customerlayout>
          }
        />
        <Route
          path="/signup"
          element={
            <Customerlayout>
              <Signup
                userDatabase={userDatabase}
                setUserDatabase={setUserDatabase}
              />
            </Customerlayout>
          }
        />
        <Route
          path="/login"
          element={
            <Customerlayout>
              <LoginPage data={userDatabase} />
            </Customerlayout>
          }
        />
        <Route
          path="/merchant"
          element={
            <Merchantlayout>
              <Merchant />
            </Merchantlayout>
          }
        />
        <Route
          path="/merchant/menu"
          element={
            <Merchantlayout>
              <MenuManager />
            </Merchantlayout>
          }
        />
        <Route
          path="/merchant/signup"
          element={
           <SignupMerchant
            merchantDatabase={merchantDatabase}
            setMerchantDatabase={setMerchantDatabase}
           />
          }
        />
        
        <Route
          path="/merchant/login"
          element={
            <LoginMerchant 
             merchantDatabase={merchantDatabase}
             />
          }
        />
        
        <Route
          path="/merchant/addmenu"
          element={
            <Merchantlayout>
              <AddMenu/>
            </Merchantlayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
