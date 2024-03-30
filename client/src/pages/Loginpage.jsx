import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../usercontext";
export default function Loginpage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    const navigate = useNavigate();
    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'content-Type': 'application/json'},
            credentials: 'include',
        });
        console.log(response.ok);
        if(response.ok){

            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(redirect=>true)
            });
        }
        if(response.ok){
            navigate("/");
        }
        else{
            alert("Wrong credentials");
        }
    }
    return(
        <div>
            <form className="login" onSubmit={login}>
                <h1>LOGIN!</h1>
                <input type="text" placeholder="Username" value={username} onChange={ev=>setUsername(ev.target.value)}/>
                <input type= "password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button>
                    LOGIN
                </button>
            </form>
        </div>
    );
}