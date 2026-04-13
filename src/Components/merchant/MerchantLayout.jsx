import MerchantSidebar from "./MerchantSidebar";
import { useMerchant } from "../../context/MerchantProvider";
import { Navigate } from "react-router";

export default function MerchantLayout({ children }) {
  const { currentUser } = useMerchant();

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/merchant/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <MerchantSidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
