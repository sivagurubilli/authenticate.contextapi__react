
import {useContext, useState} from "react"

import { AuthContext } from "../context/Authcontext"


const Navbar =()=>{
    const {isAuth,toggleAuth} = useContext(AuthContext)
    return(
        <nav  style ={{
            width:"90%",
            margin:"auto",
            padding:"1rem",
            display:"flex",
            justifyContent:"flex-end",
            alignItems:"ceter",
            border:"1px solid red"
        }}>{isAuth?(<button onClick={()=>{
            toggleAuth()
        }}>logout</button>):(<button>login</button>)}</nav>
    )
}

export default Navbar