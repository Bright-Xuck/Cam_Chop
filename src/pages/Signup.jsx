import SignupMerchant from "../Components/SignupMerchant"
export default function Signup({ userDatabase, setUserDatabase }){
    return(
        <SignupMerchant 
         userDatabase={userDatabase} 
      setUserDatabase={setUserDatabase} 
      />
    )
}