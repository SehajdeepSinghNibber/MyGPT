import { LuSendHorizontal } from "react-icons/lu";
import "./ChatSection.css";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { useContext } from "react";
import { dataContext } from "../../context/UserContext";

const ChatSection = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="chat-section">
      {!data.showResult ? (
        <div className="top-section">
          <div className="headings">
            <span>HELLO USER</span>
            <span>WELCOME TO MYGPT</span>
            <span>HOW CAN I HELP YOU...?</span>
          </div>
        </div>
      ) : (
        <div className="result-section">
          {data.messages.map((message, index) => (
            <div
              className={
                message.role === "user"
                  ? "user-message"
                  : "ai-message"
              }
              key={index}
            >
              <div
                className={
                  message.role === "user"
                    ? "user-avatar"
                    : "ai-avatar"
                }
              >
                {message.role === "user" ? "U" : "AI"}
              </div>

              <div
                className={
                  message.role === "user"
                    ? "user-question"
                    : "ai-response"
                }
              >
                {message.content}
              </div>
            </div>
          ))}

          {data.loading && (
            <div className="ai-message">
              <div className="ai-avatar">AI</div>
              <div className="ai-response">Loading...</div>
            </div>
          )}
        </div>
      )}

      <div className="bottom-section">
        <input
          type="text"
          placeholder="Ask MyGPT"
          onChange={(e) => data.setInput(e.target.value)}
          value={data.input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              data.sent(data.input);
            }
          }}
        />

        <button onClick={() => data.sent(data.input)}>
          <LuSendHorizontal />
        </button>

        <ToggleBtn />
      </div>
    </div>
  );
};

export default ChatSection;