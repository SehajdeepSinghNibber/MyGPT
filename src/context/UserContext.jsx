import { createContext, useState } from "react";
import response from "../groq";

export const dataContext = createContext();

function UserContext({ children }) {

  const sent = async(prompt) =>{
    return await response(prompt)
  }

  const [input,setInput] = useState("")

  const data = {sent,input,setInput}


  return (
    <dataContext.Provider value={{ data }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;