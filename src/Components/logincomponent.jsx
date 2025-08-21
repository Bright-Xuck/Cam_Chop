
export default function Logincomponent(prop){
   
function handleLogin(event){
    event.preventDefault()
    const formData = new FormData(event.target);
    const email = formData.get("login")
    const password = formData.get("password");
    console.log(password)

    if(email === "" || password === ""){
        alert("Please fill in all fields");
    }
    else try{
        console.log(prop.data)
        const check = prop.data.map(each =>{
            each.email === email && each.password === password ? console.log("logined!!") : null
        })
    }
    catch(err){
        console.error(err)
    }
    
}

    return(
        <form onSubmit={handleLogin}>
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

