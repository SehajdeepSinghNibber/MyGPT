import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa"
import { LuSun } from "react-icons/lu"
import "./ToggleBtn.css"

const ToggleBtn = () => {

    const [mode,setMode]=useState("dark-mode")

    const toggle = () =>{
        if(mode==="dark-mode"){
            setMode("light-mode")
        }
        else{
            setMode("dark-mode")
        }
    }

    useEffect(()=>{
        document.body.className=mode
    },[mode])

  return (
    <div>
        <button onClick={()=>{toggle()}}>{
        mode==="dark-mode"?<LuSun />:<FaMoon />
        }
        
        </button>
    </div>
  )
}

export default ToggleBtn
