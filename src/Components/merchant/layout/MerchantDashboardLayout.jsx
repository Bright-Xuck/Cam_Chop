import MerchantDashboardSidebar from "./MerchantDashboardSidebar";
import { useMerchant } from "../../../context/MerchantProvider";
import { Navigate } from "react-router";

export default function MerchantDashboardLayout({ children }) {
  const { currentUser } = useMerchant();

  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/merchant/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <MerchantDashboardSidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
