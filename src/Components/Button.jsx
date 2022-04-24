


import React from 'react'
import {useContext} from "react"
import {ThemeContext} from "../Contexts/ThemeContext"
export const Button=() =>{

    const {
        theme,
        themeModes:{dark,light},
    }=useContext(ThemeContext)

    
  return (
    <div>


    <button style ={theme?{...dark}:{...light}}>{children}
    </button>


    </div>
  )
}

export default Button