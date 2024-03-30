import { useState } from "react";

export default function Registerpage()
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();

        const response = await fetch('http://localhost:3000/register',{
                method:'POST',
                body:JSON.stringify({username,password}),
                headers:{'Content-type':'application/json'},
            })
        if (response.status !== 200){
            alert('Registration Failed');
        }
        else if (response.status ===200) {
            alert('Registration SucessFul')
        }
    }
    return(
        <div>
            <form className="register" onSubmit={register}>
                <h1>Register Now !</h1>
                <input type="text" 
                placeholder="Username"
                value={username} 
                onChange={ev => setUsername(ev.target.value)} />
                <input type= "password" 
                placeholder="Password"
                value={password}
                onChange={ev=>setPassword(ev.target.value)} />
                <button>
                    Register
                </button>
            </form>
        </div>
    );
}