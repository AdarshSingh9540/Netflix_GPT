import React,{useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/Firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser } from '../utils/usersSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { Supported_Lang } from '../utils/Constant';

const Header = () => {
 const navigate = useNavigate();
 const dispatch =useDispatch();
 const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

const user = useSelector((store)=>store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email, displayname , photoURL} = user;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayname:displayname,
            photoURL:photoURL}));
            navigate("/browser")
       
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    
  },[]);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLangChange = (e)=>{
    console.log(e.target.value)
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
    <img  className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

    {
      user &&  <div className="flex p-2"> 
      {
        showGptSearch &&
        <select className='p-2 bg-gray-800 text-white m-4' name="" id="" onClick={handleLangChange}>
      {Supported_Lang.map(lang =>   <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>
      }
      <button className='py-2 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg font-bold'
      onClick={handleGptSearchClick}
      > {showGptSearch ?"Home" :"GPT Search"}
       </button>
      <img className="w-14 h-14 p-2" src={user.photoURL}alt="" />
      <button onClick={handleSignOut} className="text-white font-bold bg-">(Sign Out)</button>
    </div>
    }
    </div>
  )
}

export default Header