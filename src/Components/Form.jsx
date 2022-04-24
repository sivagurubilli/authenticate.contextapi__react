

import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

import Button from "./Button";

export const Form =()=>{
     const {theme,
    themeModes:{dark,light},
}=useContext(ThemeContext)



return(
<div>

    <Form style ={theme?{...dark}:{...light}}>
        <input type="text" placeholder="email"/>
            <input typr="text" placeholder="password"/>
            <Button>login</Button>

    </Form>
</div>


)
}