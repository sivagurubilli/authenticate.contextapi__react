

import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";


const Navbar =()=>{
    const {
        theme,
        toggleTheme,
        themmeModes:{dark,light},
    } =useContext(ThemeContext);

    return (
        <nav style ={theme ?{...dark}:{...light}}>
<button onClick={()=>{
    toggleTheme()
}}>{theme?"togglelight":'toggledark'}

</button>
        </nav>
    )
}


export default Navbar