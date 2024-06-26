import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./usercontext";

export default function Header(){
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:3000/profile',{
      credentials : 'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      })
    }); 
  },[]);

  function logout(){
    fetch('http://localhost:3000/logout',{
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    
  }
  const username=userInfo?.username;



    return(
        <header>
        < Link to='/' className='logo'>Blog App</Link>

        <nav>
          {username && (
            <>
            < Link to='/create'>Create New Post</Link>
            < a onClick={logout}> LogOut</a>
            </>
          )}
          {!username && (
            <>
            <Link to='/login' >Login</Link>
            <Link to='/register' >Regiser</Link>
            </>
          )}
        </nav>
      </header>
    );
}