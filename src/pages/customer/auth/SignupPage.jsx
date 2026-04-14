import CustomerAuthSignup from "../Components/customer/auth/CustomerAuthSignup"
export default function Signup({ userDatabase, setUserDatabase }){
    return(
        <CustomerAuthSignup
         userDatabase={userDatabase} 
      setUserDatabase={setUserDatabase} 
      />
    )
}