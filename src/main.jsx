import { createRoot } from "react-dom/client";
import App from "./app";
import MerchantProvider from "./context/MerchantProvider";

createRoot(document.getElementById("root")).render(
  <MerchantProvider>
    <App />
  </MerchantProvider>
);
