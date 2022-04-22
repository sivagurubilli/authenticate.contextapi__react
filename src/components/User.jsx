


import { useState } from "react";
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

export const User =()=>{
    const {isAuth,toggleAuth} = useContext(AuthContext);
    const[register,setRegister] = useState({})


     const handleRegister1 =e=>{
    const {name,value} = e.target;
    setRegister({...register,[name]:value})
     }

     const handleRegistersubmit =async(e)=>{
         e.preventDefault();
         const {data} = await axios.post("https://reqres.in/api/register",register)

         if(data.token){
             setRegister(data)
             toggleAuth();
         }
     }

console.log(register)
     return(
         <div>
             <h3>
                 login user
             </h3>

             <form onSubmit={handleRegistersubmit}>


                 <input type="text"
                 name="email"
                 placeholder="emil"
                 onChange={handleRegister1}
                 /><input type="password"
                 name="password"
                 placeholder="password"
                 onChange={handleRegister1}
                 />
                 <button>login</button>{isAuth?(<>
                 <P>LOGIN :YES</P>
                 <p>Token :{register.token}</p>
                 
                 </>):<p>Login :no</p>}
             </form>
         </div>
     )
}


export default User