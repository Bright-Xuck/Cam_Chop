import "../src/index.css";
import { HashRouter, Routes, Route } from "react-router";
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
import { merchants } from "./data/merchants";
import MenuManager from "./Components/MenuManager";
import { products } from "./data/productdata";
import MerchantStore from "./Components/Merchantstore";
import ProductInfo from "./Components/ProductInfo";
import { Users } from "./data/users";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";


export default function App() {
  const [userDatabase, setUserDatabase] = useState(Users);
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
          path="/profile"
          element={
            <Customerlayout>
              <Profile />
            </Customerlayout>
          }
        />
        <Route
          path="/orders"
          element={
            <Customerlayout>
              <Orders />
            </Customerlayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Customerlayout>
              <Checkout />
            </Customerlayout>
          }
        />
        <Route
          path="/search"
          element={
            <Customerlayout>
              <Search />
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
          path="/merchantstore/item/:id/:name"
          element={
           <ProductInfo />
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
