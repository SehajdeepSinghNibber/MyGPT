import { FaPlus, FaTrash } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css";
import { useContext, useState } from "react";
import { dataContext } from "../../context/UserContext";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);

  const { data } = useContext(dataContext);

  const {
    chatHistory,
    activeChatId,
    setActiveChatId,
    newChat,
    deleteChat,
  } = data;

  const handleNewChat = () => {
    newChat();
  };

  const handleChatClick = (chatId) => {
    setActiveChatId(chatId);
    setExtend(true);
  };

  const handleDeleteChat = (e, chatId) => {
    e.stopPropagation();
    deleteChat(chatId);
  };

  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => setExtend((prev) => !prev)}
      />

      <div className="newchat" onClick={handleNewChat}>
        <FaPlus />
        {extend ? <p>New Chat</p> : null}
      </div>

      <div className="recent">
        {extend ? (
          <div className="chat-history">
            {chatHistory.length === 0 ? (
              <p className="no-chat">No chats yet</p>
            ) : (
              chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${
                    activeChatId === chat.id
                      ? "active-chat"
                      : ""
                  }`}
                  onClick={() => handleChatClick(chat.id)}
                >
                  <FaRegMessage className="chat-icon" />

                  <p>{chat.title}</p>

                  <button
                    className="delete-chat"
                    onClick={(e) =>
                      handleDeleteChat(e, chat.id)
                    }
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;