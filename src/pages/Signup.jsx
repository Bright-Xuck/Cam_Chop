import SignupCustomer from "../Components/SignupCustomer"
export default function Signup({ userDatabase, setUserDatabase }){
    return(
        <SignupCustomer
         userDatabase={userDatabase} 
      setUserDatabase={setUserDatabase} 
      />
    )
}