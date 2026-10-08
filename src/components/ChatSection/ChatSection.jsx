import { LuSendHorizontal } from "react-icons/lu";
import "./ChatSection.css";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { useContext } from "react";
import { dataContext } from "../../context/UserContext";

const ChatSection = () => {

  let {data} = useContext(dataContext)

  return (
    <div className="chat-section">
      <div className="top-section">
        <div className="headings">
          <span>HELLO USER</span>
          <span>WELCOME TO MYGPT</span>
          <span>HOW CAN I HELP YOU...?</span>
        </div>
      </div>

      <div className="bottom-section">
        <input type="text" placeholder="Ask MyGPT" onChange={(e)=>{data.setInput(e.target.value)}} value={data.input}/>
        <button onClick={async ()=>{
          data.setInput("")
          const reply = await(data.sent(data.input))
          console.log(reply)
        }}>
          <LuSendHorizontal />
        </button>
        <ToggleBtn />
      </div>
    </div>
  );
};

export default ChatSection;
