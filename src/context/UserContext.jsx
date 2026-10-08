import { createContext, useState } from "react";
import response from "../groq";

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const sent = async (prompt) => {
    if (!prompt.trim()) return;

    setShowResult(true);
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setInput("");

    try {
      const reply = await response(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: reply,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const data = {
    sent,
    input,
    setInput,
    showResult,
    loading,
    messages,
  };

  return (
    <dataContext.Provider value={{ data }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;