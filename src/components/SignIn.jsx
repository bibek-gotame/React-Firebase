import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../../firebase";
import Header from "./Header";

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [Err, setErr] = useState("");
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <div className="bg-slate-500 h-screen">
        <Header />

        <div className=" text-white  bg-black w-full max-w-[22rem] px-5 py-10 mx-auto mt-[9%]  rounded-lg ">
          <h1 className=" font-bold text-2xl mb-4">
            {isSignIn ? " Sign In " : " Sign Up"}
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // handleSubmit(e)
            }}
            className=" text-black  flex flex-col gap-6"
          >
            {!isSignIn && (
              <input
                className="rounded-md p-2"
                ref={name}
                type="text"
                placeholder="enter your name"
              />
            )}
            <input
              className="rounded-md p-2"
              ref={email}
              type="email"
              placeholder="email"
            />
            <input
              className="rounded-md p-2"
              ref={password}
              type="text"
              placeholder="password"
            />
            <div className="text-red-600"> {Err}</div>{" "}
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white  bg-red-600 rounded-md py-2 font-bold text-2xl  "
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div
            onClick={() => {
              setIsSignIn(!isSignIn);
            }}
            className="mt-4 hover:underline cursor-pointer"
          >
            {isSignIn
              ? "Do not have account ? Sign Up "
              : "Already Have account ? Sign In"}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
