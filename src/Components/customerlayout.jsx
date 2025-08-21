import Nav from "./nav"

export default function Customerlayout({children}){
    return(
        <div className=" ">
            <div className="">
            <Nav />
            </div>
            <div className=" mt-[5.5rem]">
            {children}
            </div>
        </div>
    )
}