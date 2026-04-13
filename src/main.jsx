import { createRoot } from "react-dom/client";
import App from "./app";
import MerchantProvider from "./context/MerchantProvider";
import Cartstore from "./context/CartStore";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Cartstore>
      <MerchantProvider>
        <App />
      </MerchantProvider>
    </Cartstore>
  </AuthProvider>
);
