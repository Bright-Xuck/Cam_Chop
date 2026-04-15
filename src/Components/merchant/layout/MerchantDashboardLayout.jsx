import MerchantDashboardSidebar from "./MerchantDashboardSidebar";

export default function MerchantDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background">
      <MerchantDashboardSidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
