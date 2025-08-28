import { Link } from "react-router";
import { Home } from "lucide-react";
import "/src/buttons.module.css"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  
const[open, Setopen] = useState({
 show1: false,
 show2: false
})
function toggle(name){
    Setopen(prev => ({
        ...prev,
        [name]: !prev[name]
    }))
}
  return (
    <nav className="box-border h-[100vh] w-[150px] py-1.5 px-4 justify-start">
      <ul className="list-none h-[100%] flex flex-col gap-2">
        <li className="flex justify-end ">
            <span><Home/></span>
            <button>toggle</button>
        </li>
        <li>
          <a href=""><Home/>
          <span>Home</span>
          </a>
        </li>
        <li>
          <a href=""><Home /> 
            <span>Dashboard</span>
            </a>
        </li>
        <li>
            <button onClick={() => toggle("show1")} className="dropbtn grid grid-cols-3 text-left cursor-pointer">
                <Home/>
                <span>Create</span>
                <ChevronDown className={`justify-self-end-safe transition-transform ${open.show1 ? "rotate-180" : ""}`}/>
            </button>
            <ul className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show1 ? "max-h-40" : "max-h-0"}`}>
                <li><a href="#">Food</a></li>
                <li><a href="#">Veg</a></li>
            </ul>
        </li>
        <li>
            <button onClick={() =>toggle("show2")} className="dropbtn grid grid-cols-3 text-left cursor-pointer">
                <Home/>
                <span>Create Another</span>
                <ChevronDown className={`justify-self-end-safe transition-transform ${open.show2 ? "rotate-180" : ""}`}/>
            </button>
            <ul  className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show2 ? "max-h-40" : "max-h-0"}`}>
                <li><a href="#">Food</a></li>
                <li><a href="#">Vegetable</a></li>
            </ul>
        </li>
        <li>
          <Link to="/merchant/Additem" className=" flex items-center gap-3.5" >
            <Home/>
            <span>Add Item</span></Link>
        </li>
        <li>
          <a href="">
            <Home />
            <span>Calender</span></a>
        </li>
      </ul>
    </nav>
  );
}
