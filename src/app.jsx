import "../src/index.css";
import { HashRouter, Routes, Route } from "react-router";

// Customer Pages
import ShopPage from "./pages/customer/ShopPage";
import LandingPage from "./pages/customer/LandingPage";
import ProfilePage from "./pages/profile";
import OrdersPage from "./pages/customer/OrdersPage";
import CheckoutPage from "./pages/customer/CheckoutPage";
import SearchPage from "./pages/customer/SearchPage";

// Customer Auth Components
import CustomerAuthSignup from "./Components/customer/auth/CustomerAuthSignup";
import CustomerAuthLogin from "./Components/customer/auth/CustomerAuthLogin";

// Merchant Pages
import MerchantDashboardPage from "./pages/merchant/MerchantDashboardPage";
import LiveOrdersPage from "./pages/merchant/LiveOrders";
import CatalogManagerPage from "./pages/merchant/CatalogManager";
import StoreSettingsPage from "./pages/merchant/StoreSettings";
import AnalyticsPage from "./pages/merchant/Analytics";

// Layouts
import CustomerPageLayout from "./Components/shared/layouts/CustomerPageLayout";
import MerchantDashboardLayout from "./Components/merchant/layout/MerchantDashboardLayout";

// Auth Components
import MerchantAuthSignup from "./Components/merchant/auth/MerchantAuthSignup";
import MerchantAuthLogin from "./Components/merchant/auth/MerchantAuthLogin";

// Store Components
import MerchantStoreView from "./Components/merchant/store-view/MerchantStoreView";
import ProductDetailPage from "./Components/merchant/store-view/ProductDetailPage";

export default function App() {

  return (
    <HashRouter>
      <Routes>
        {/* ========== CUSTOMER ROUTES ========== */}
        <Route
          path="/"
          element={
            <CustomerPageLayout>
              <LandingPage />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <CustomerPageLayout>
              <ShopPage />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <CustomerPageLayout>
              <CustomerAuthSignup />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/login"
          element={
            <CustomerPageLayout>
              <CustomerAuthLogin />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <CustomerPageLayout>
              <ProfilePage />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/orders"
          element={
            <CustomerPageLayout>
              <OrdersPage />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <CustomerPageLayout>
              <CheckoutPage />
            </CustomerPageLayout>
          }
        />
        <Route
          path="/search"
          element={
            <CustomerPageLayout>
              <SearchPage />
            </CustomerPageLayout>
          }
        />

        {/* ========== MERCHANT STORE (Public) ========== */}
        <Route path="/merchantstore" element={<MerchantStoreView />} />
        <Route path="/merchantstore/item/:id" element={<MerchantStoreView />} />
        <Route path="/merchantstore/item/:id/:name" element={<ProductDetailPage />} />

        {/* ========== MERCHANT AUTH ROUTES ========== */}
        <Route
          path="/merchant/signup"
          element={<MerchantAuthSignup />}
        />
        <Route
          path="/merchant/login"
          element={<MerchantAuthLogin />}
        />

        {/* ========== MERCHANT PORTAL ROUTES ========== */}
        <Route
          path="/merchant"
          element={
            <MerchantDashboardLayout>
              <MerchantDashboardPage />
            </MerchantDashboardLayout>
          }
        />
        <Route
          path="/merchant/orders"
          element={
            <MerchantDashboardLayout>
              <LiveOrdersPage />
            </MerchantDashboardLayout>
          }
        />
        <Route
          path="/merchant/menu"
          element={
            <MerchantDashboardLayout>
              <CatalogManagerPage />
            </MerchantDashboardLayout>
          }
        />
        <Route
          path="/merchant/analytics"
          element={
            <MerchantDashboardLayout>
              <AnalyticsPage />
            </MerchantDashboardLayout>
          }
        />
        <Route
          path="/merchant/settings"
          element={
            <MerchantDashboardLayout>
              <StoreSettingsPage />
            </MerchantDashboardLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
