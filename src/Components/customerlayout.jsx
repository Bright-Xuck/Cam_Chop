import Nav from "./nav";
import Footer from "./footer";

export default function Customerlayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main id="main-content" className="flex-1 mt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
