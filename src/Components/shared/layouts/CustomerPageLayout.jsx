import MainNavigation from "../navigation/MainNavigation";
import Footer from "../common/Footer";

export default function Customerlayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNavigation />
      <main id="main-content" className="flex-1 mt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
