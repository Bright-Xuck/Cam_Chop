import { Link } from "react-router"

export default function Shop(){
    return(
        <>
        <h1>Hiiiiii</h1>
         <Link className="text-blue-200" to="/landing">Landing</Link>
         <Link to="/signup">Signup</Link>
         <Link to="/login">Login</Link>
         </>
    )
}