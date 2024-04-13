import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react"
import { auth } from "../../firebase";

function SignIn() {
const [isSignIn, setIsSignIn] = useState(true)
const name = useRef()
const email = useRef()
const password = useRef()

const handleSubmit = (e)=>{
    e.preventDefaut()
    // setIsSignIn(!isSignIn)
}

if(!isSignIn){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode+errorMessage);
      // ..
    });
  
}else{
// console.log('sign in');
}
  return (
    <div className="flex flex-col gap-4  bg-black w-[30rem] py-6 px-3 rounded-lg ">
        <form onSubmit={(e)=>{handleSubmit(e)}} className=" flex flex-col gap-4" >
            <input className="rounded-md p-2" ref={name}  type="text" placeholder="enter your name"/>
            <input className="rounded-md p-2" ref={email} type="email" placeholder="email" />
            <input className="rounded-md p-2" ref={password} type="text" placeholder="password"/>
            <button type="submit" className="bg-black text-white">{isSignIn?  'Sign In' : 'Sign Up'}</button>
        </form>
        <div  className="text-white">{isSignIn? 'Do not have account? Sign Up ':'Already Have account? Sign In'}</div>
    </div>
  )
}

export default SignIn