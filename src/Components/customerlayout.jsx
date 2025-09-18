import Nav from "./nav";
import Footer from "./footer";

export default function Customerlayout({ children }) {
  return (
    <div className=" ">
      <div className="">
        <Nav />
      </div>
      <div className=" mt-[5rem]">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
