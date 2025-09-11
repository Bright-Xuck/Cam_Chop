import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
export default function Logincomponent(prop){

    const Navigate = useNavigate()
   
function handleLogin(event){
    event.preventDefault()
    const formData = new FormData(event.target);
    const email = formData.get("login")
    const password = formData.get("password");

    if(email === "" || password === ""){
        toast.error("Please fill in all fields");
    }
    else {
        const check = prop.data.find(each => each.email == email && each.password == password )
        if(check){
                toast.success("Login Successful")
                setTimeout(() =>
                Navigate("/shop"), 2000)
            }
            else{
                toast.error("Incorrect Email or Password")
                event.target.reset()
            }
        }
    }

    return(
        <form onSubmit={handleLogin}>
            <Toaster/>
            <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="login"/>
            </div>
            <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password"/>
            </div>
            <button>Submit</button>
        </form>
    )
}

