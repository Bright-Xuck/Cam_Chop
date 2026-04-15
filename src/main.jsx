import { createRoot } from "react-dom/client";
import App from "./app";
import Cartstore from "./context/CartStore";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Cartstore>
        <App />
    </Cartstore>
  </AuthProvider>
);
