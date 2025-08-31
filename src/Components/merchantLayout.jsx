import Sidebar from "./merchantsidebar";

export default function Merchantlayout({children}){
    return(
        <div className="flex ">
            <div className="">
            <Sidebar />
            </div>
            <div className="w-full">
            {children}
            </div>
        </div>
    )
}