import { NavLink } from "react-router";
import {
  Home,
  ChevronDown,
  Lightbulb,
  BookAIcon,
  ListCheck,
  PersonStandingIcon,
  CircleDollarSignIcon,
  ListOrdered,
  Megaphone,
  Settings,
  HelpCircleIcon,
  User2Icon,
} from "lucide-react";
import "/src/buttons.module.css";
import { useState } from "react";
import { useMerchant } from "../context/MerchantProvider";

export default function Sidebar() {
  const { currentUser } = useMerchant();
  const [open, Setopen] = useState({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false
  });
  function toggle(name) {
    Setopen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }
  return (
    <nav className="box-border h-auto w-[180px] py-1.5 px-3 grid grid-cols-1 border-r-2 border-r-neutral-200 sticky left-0 top-0">
      <ul className="list-none h-[80%] flex flex-col  gap-1.5">
        <li className="flex justify-end ">
          <button>{"store owner"}</button>
        </li>
        <li>
          <NavLink
            to="/merchant"
            end
            className={({ isActive }) =>
              `flex text-left py-2 rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <Home />
            <span>Home</span>
          </NavLink>
        </li>
        <li
          className={`${
            !open.show3 ? "hover:bg-gray-200 rounded-lg" : null
          } py-2`}
        >
          <button
            onClick={() => toggle("show3")}
            className="dropbtn flex gap-1.5 text-left cursor-pointer"
          >
            <Lightbulb />
            <span>Insights</span>
            <ChevronDown
              className={` transition-transform ${
                open.show3 ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show3 ? "max-h-40" : "max-h-0"}`}
          >
            <li>
              <NavLink
                to="/merchant/create/food"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchant/create/veg"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Veg
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/merchant/dashboard"
            className={({ isActive }) =>
              `block py-2 rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <BookAIcon />
            <span>Reports</span>
          </NavLink>
        </li>
        <li
          className={`${
            !open.show1 ? "hover:bg-gray-200 rounded-lg" : null
          } py-2`}
        >
          <button
            onClick={() => toggle("show1")}
            className="dropbtn flex gap-1.5 text-left cursor-pointer"
          >
            <PersonStandingIcon />
            <span>Customers</span>
            <ChevronDown
              className={`justify-self-end-safe transition-transform ${
                open.show1 ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show1 ? "max-h-40" : "max-h-0"}`}
          >
            <li>
              <NavLink
                to="/merchant/create/food"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Customer Insights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchant/create/veg"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Ratings & Reviews
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`${!open.show2 ? "hover:bg-gray-200 rounded-lg" : null}`}
        >
          <button
            onClick={() => toggle("show2")}
            className="dropbtn flex gap-1.5 py-1.5 text-left cursor-pointer"
          >
            <CircleDollarSignIcon />
            <span>Financials</span>
            <ChevronDown
              className={`justify-self-end-safe transition-transform ${
                open.show2 ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show2 ? "max-h-40" : "max-h-0"}`}
          >
            <li>
              <NavLink
                to="/merchant/create/food2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchant/create/veg2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Vegetable
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/merchant/additem"
            className={({ isActive }) =>
              `flex text-left rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <ListCheck />
            <span>Add Item</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/merchant/calender"
            className={({ isActive }) =>
              `flex items-center gap-1.5  rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <ListOrdered />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/merchant/calender"
            className={({ isActive }) =>
              `flex items-center gap-3.5  rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <Megaphone />
            <span>Marketing</span>
          </NavLink>
        </li>
        <li
          className={`${!open.show4 ? "hover:bg-gray-200 rounded-lg" : null}`}
        >
          <button
            onClick={() => toggle("show4")}
            className="dropbtn flex gap-1.5 py-2 text-left cursor-pointer"
          >
            <Settings />
            <span>Settings</span>
            <ChevronDown
              className={`justify-self-end-safe transition-transform ${
                open.show4 ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show4 ? "max-h-40" : "max-h-0"}`}
          >
            <li>
              <NavLink
                to="/merchant/create/food2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Account Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchant/create/veg2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Store Settings
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="pt-15 h-[20%]">
        <li>
          <NavLink
            to="/merchant/calender"
            className={({ isActive }) =>
              `flex items-center gap-3.5  rounded-lg transition ${
                isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            <HelpCircleIcon />
            <span>Get Help</span>
          </NavLink>
        </li>
         <li
          className={`${!open.show5 ? "hover:bg-gray-200 rounded-lg" : null}`}
        >
          <button
            onClick={() => toggle("show5")}
            className="dropbtn flex gap-1.5 py-2 text-left cursor-pointer"
          >
            <User2Icon />
            <span>Current Logged </span>
            <ChevronDown
              className={`justify-self-end-safe transition-transform ${
                open.show5 ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`list-none pl-6 overflow-hidden transition-all duration-500 
             ${open.show5 ? "max-h-40" : "max-h-0"}`}
          >
            <li>
              <NavLink
                to="/merchant/create/food2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Log Out
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/merchant/create/veg2"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition ${
                    isActive ? "bg-red-500 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                Edit Info
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
