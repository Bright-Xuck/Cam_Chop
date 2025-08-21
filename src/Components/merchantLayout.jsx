import Sidebar from "./merchantsidebar";

export default function Merchantlayout({children}){
    return(
        <div className="grid grid-cols-12 ">
            <div className="col-span-3">
            <Sidebar />
            </div>
            <div className="col-span-9">
            {children}
            </div>
        </div>
    )
}