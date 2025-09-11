import { Search } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";

export default function Nav() {
  return (
  <nav className="grid grid-cols-2 fixed top-0 left-0 w-full justify-between items-center h-[5rem] border-b-2 shadow-md shadow-black z-50 bg-white">
        <div>
          <form action="" className="grid grid-cols-5 border rounded-2xl p-2 max-w-[300px]">
          <Search className="col-span-1" />
          <input type="text" placeholder="Enter your address" className="focus:outline-none col-span-3"/>
          <button className="col-span-1 place-self-end"><MoveRight/></button>
          </form> 
        </div >
        <div className="flex gap-4 mr-8 items-center justify-end max-sm:gap-1 max-sm:mr-2">
        <Link to={"/login"} className="text-black hover:cursor-pointer ">Login</Link>
        <Link to={"/signup"} className="bg-red-500 hover:cursor-pointer text-white p-3 rounded-2xl text-sm-[4rem] hover:bg-red-800">Sign Up</Link>
        </div>
      </nav>
  );
}