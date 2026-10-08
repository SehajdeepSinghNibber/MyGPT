import { createContext, useEffect, useState } from "react";
import response from "../groq";

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const [chatHistory, setChatHistory] = useState(() => {
    const savedChats = localStorage.getItem("chatHistory");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const sent = async (prompt) => {
    if (!prompt.trim()) return;

    setShowResult(true);
    setLoading(true);

    let chatId = activeChatId;

    if (!chatId) {
      chatId = Date.now();

      const newChat = {
        id: chatId,
        title: prompt.slice(0, 30),
        messages: [],
      };

      setChatHistory((prev) => [...prev, newChat]);
      setActiveChatId(chatId);
    }

    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  role: "user",
                  content: prompt,
                },
              ],
            }
          : chat
      )
    );

    setInput("");

    try {
      const reply = await response(prompt);

      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    role: "ai",
                    content: reply,
                  },
                ],
              }
            : chat
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const newChat = () => {
    setActiveChatId(null);
    setShowResult(false);
    setInput("");
  };

  const deleteChat = (chatId) => {
    setChatHistory((prev) =>
      prev.filter((chat) => chat.id !== chatId)
    );

    if (activeChatId === chatId) {
      setActiveChatId(null);
      setShowResult(false);
      setInput("");
    }
  };

  const activeChat = chatHistory.find(
    (chat) => chat.id === activeChatId
  );

  const messages = activeChat ? activeChat.messages : [];

  const data = {
    sent,
    input,
    setInput,
    showResult,
    loading,
    messages,
    chatHistory,
    activeChatId,
    setActiveChatId,
    newChat,
    deleteChat,
  };

  return (
    <dataContext.Provider value={{ data }}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;