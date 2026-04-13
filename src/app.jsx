import "../src/index.css";
import { HashRouter, Routes, Route } from "react-router";
import { useState } from "react";

// Customer Pages
import Shop from "./pages/Shop";
import Landing from "./pages/landing";
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";

// Merchant Pages
import MerchantDashboard from "./pages/merchantdashboard";
import LiveOrders from "./pages/merchant/LiveOrders";
import CatalogManager from "./pages/merchant/CatalogManager";
import StoreSettings from "./pages/merchant/StoreSettings";
import Analytics from "./pages/merchant/Analytics";

// Layouts
import Customerlayout from "./Components/customerlayout";
import MerchantLayout from "./Components/merchant/MerchantLayout";

// Auth Components
import SignupMerchant from "./Components/SignupMerchant";
import LoginMerchant from "./Components/LoginMerchant";

// Store Components
import MerchantStore from "./Components/Merchantstore";
import ProductInfo from "./Components/ProductInfo";

// Data
import { merchants } from "./data/merchants";
import { products } from "./data/productdata";
import { Users } from "./data/users";

export default function App() {
  const [userDatabase, setUserDatabase] = useState(Users);
  const [merchantDatabase, setMerchantDatabase] = useState(merchants);
  const [item, Setitem] = useState(products);
  const [edititem, setEdititem] = useState(null);

  return (
    <HashRouter>
      <Routes>
        {/* ========== CUSTOMER ROUTES ========== */}
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

        {/* ========== MERCHANT STORE (Public) ========== */}
        <Route path="/merchantstore" element={<MerchantStore />} />
        <Route path="/merchantstore/item/:id" element={<MerchantStore />} />
        <Route path="/merchantstore/item/:id/:name" element={<ProductInfo />} />

        {/* ========== MERCHANT AUTH ROUTES ========== */}
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
          element={<LoginMerchant merchantDatabase={merchantDatabase} />}
        />

        {/* ========== MERCHANT PORTAL ROUTES ========== */}
        <Route
          path="/merchant"
          element={
            <MerchantLayout>
              <MerchantDashboard />
            </MerchantLayout>
          }
        />
        <Route
          path="/merchant/orders"
          element={
            <MerchantLayout>
              <LiveOrders />
            </MerchantLayout>
          }
        />
        <Route
          path="/merchant/menu"
          element={
            <MerchantLayout>
              <CatalogManager />
            </MerchantLayout>
          }
        />
        <Route
          path="/merchant/analytics"
          element={
            <MerchantLayout>
              <Analytics />
            </MerchantLayout>
          }
        />
        <Route
          path="/merchant/settings"
          element={
            <MerchantLayout>
              <StoreSettings />
            </MerchantLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
