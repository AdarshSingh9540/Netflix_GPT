import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validat } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/Firebase';

import {  updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/usersSlice';
import { Logo_URL, photoURL } from '../utils/Constant';


const Login = () => {

   const [isSignIn , setIsSignIn] = useState(true);
   const [errorMess ,setErrorMess] = useState(null);



   const email = useRef(null);
   const name= useRef(null);
   const password = useRef(null);

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
           photoURL:"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        }).then(() => {
          const {uid,email, displayname } = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayname:displayname,
              photoURL:"https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"}));
          
        }).catch((error) => {
         setErrorMess(error.message);
        });
      
    
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
  
    // const user = userCredential.user;


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
    <img className='md:h-screen md:object-cover h-screen object-cover md:h-auto md:object-contain' src={Logo_URL} alt="" />
    </div>
    <form  onSubmit={(e)=> e.preventDefault()} className=" w-[90%] md:w-3/12 absolute  p-12 bg-black my-28 md:my-36 mx-6 md:mx-auto right-0 left-0 text-white opacity-85" action="">
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