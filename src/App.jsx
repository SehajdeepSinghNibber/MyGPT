import ChatSection from "./components/ChatSection/ChatSection";
import Seperation from "./components/Seperation/Seperation";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {

  return (
    <div className="app-layout">
      <Sidebar />
      <Seperation />
      <ChatSection />
    </div>
  );
};

export default App;