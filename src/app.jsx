import "../src/index.css";
import { HashRouter, Routes, Route, Router } from "react-router";
import Shop from "./pages/Shop";
import Landing from "./pages/landing";
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
import Merchant from "./pages/merchantdashboard";
import { useState } from "react";
import Merchantlayout from "./Components/merchantLayout";
import Customerlayout from "./Components/customerlayout";
import SignupMerchant from "./Components/SignupMerchant";
import LoginMerchant from "./Components/LoginMerchant";
import {merchants} from "./data/merchants";
import MenuManager from "./Components/MenuManager";
import { products } from "./data/productdata";
import MerchantStore from "./Components/Merchantstore";


export default function App() {
  const [userDatabase, setUserDatabase] = useState([]);
  const [merchantDatabase, setMerchantDatabase] = useState(merchants)
  const [item, Setitem] = useState(products)
  const [edititem, setEdititem] = useState(null)

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
          path="/merchantstore"
          element={
            <MerchantStore/>
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
          path="/merchant/signup"
          element={
           <SignupMerchant
            merchantDatabase={merchantDatabase}
            setMerchantDatabase={setMerchantDatabase}
           />
          }
        />
        <Route
          path="/merchantstore/item/:id"
          element={
           <MerchantStore />
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
          path="/merchant/Menumanager"
          element={
            <Merchantlayout>
              <MenuManager item={item} Setitem={Setitem} edititem={edititem} setEdititem={setEdititem}/>
            </Merchantlayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
