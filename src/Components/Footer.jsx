

import {useContext} from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

export  const Footer=()=>{
    const {
        theme,
        themeModes:{dark,light}
    }= useContext(ThemeContext)


    return(
        <div>
            <Footer style ={theme?{...dark}:{...light}}>
                <p>Welcome siva</p>
                </Footer>
        </div>
    )
}