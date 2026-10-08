import { FaPlus } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"
import "./Sidebar.css"
import { useState } from "react"

const Sidebar = () => {

    const [extend, setExtend] = useState(false)

  return (
    <div className="sidebar">
      <GiHamburgerMenu id="ham" onClick={()=>setExtend(prev=>!prev)}/>
      <div className="newchat">
        <FaPlus />
        {extend?<p>
            New Chat
        </p>:null}
      </div>
      <div className="recent">
        <FaRegMessage />
        {extend?<p>
            Dummy Chat
        </p>:null}
      </div>
    </div>
  )
}

export default Sidebar
