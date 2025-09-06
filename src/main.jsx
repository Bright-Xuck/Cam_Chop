import { createRoot } from "react-dom/client";
import App from "./app";
import MerchantProvider from "./context/MerchantProvider";
import Cartstore from "./context/CartStore";

createRoot(document.getElementById("root")).render(
  <Cartstore>
  <MerchantProvider>
    <App />
  </MerchantProvider>
  </Cartstore>
);
