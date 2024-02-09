import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validat } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import {useNavigate } from 'react-router-dom';
import {  updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/usersSlice';



const Login = () => {

   const [isSignIn , setIsSignIn] = useState(true);
   const [errorMess ,setErrorMess] = useState(null);



   const email = useRef(null);
   const name= useRef(null);
   const password = useRef(null);
   const navigate = useNavigate();
  const dispatch = useDispatch();

   const handleClick = () =>{
    const message =Validat(email.current.value,password.current.value);
    setErrorMess(message);
    if(message) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
           photoURL: "https://avatars.githubusercontent.com/u/131537713?v=4"
        }).then(() => {
          const {uid,email, displayname , photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayname:displayname,
              photoURL:photoURL}));
              navigate("/browser")
        }).catch((error) => {
         setErrorMess(error.message);
        });
        // console.log(user);
        navigate("/browser")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMess(errorCode+"_"+errorMessage)
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user);
    navigate("/browser")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMess(errorCode+"-"+errorMessage);
  });
    }
    


   }

   const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
   }

  return (
    <div >
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <form  onSubmit={(e)=> e.preventDefault()} className="  w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-85" action="">
     <h1 className="font-bold text-3xl py-4"   >{isSignIn?"Sign In":"Sign Up"}</h1>
      
      {!isSignIn &&
        <input  className="p-4 my-4 w-full
       bg-gray-600" 
       type="text"
       ref={name}
        placeholder="Full Name"/>
      }
     
      <input
      ref={email}
        className="p-4 my-4 w-full
       bg-gray-600" 
       type="text"
        placeholder="Email"/>
      <input
      ref={password}
       className="my-4 p-4 w-full
       bg-gray-600" type="text" 
       placeholder="Password" />
      <p className="text-red-700 font-bold p-2 text-2xl">{errorMess}</p>
      <button className="w-full p-4 my-6 rounded-lg bg-red-700"  onClick={handleClick}>{isSignIn?"Sign In" : "Sign Up"}</button>
      <h4 className="cursor-pointer" onClick={toggleSignIn}>
 {isSignIn?" New to Netflix? Sign Up":"Already a user? Sign In"} now.</h4>
    </form>
    </div>
  )
}

export default Login