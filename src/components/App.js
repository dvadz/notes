import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import Notes from "./notes/Notes.js";
import User from "./user/User.js";
import LoginModal from "./login/LoginModal.js";
import { useSelector } from "react-redux";

const App = () => {
  const { isLoginModalOpen, currentUser } = useSelector((state) => {
    return state.login;
  });

  return (
    <div className="app h-screen bg-zinc-800 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <div>Search</div>
        <div>Refresh</div>
        <div>View</div>
        <div>Settings</div>
        <div>
          <User />
        </div>
      </Navbar>
      <div className="menu-notes flex">
        <Menu>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </Menu>
        {currentUser ? (
          <Notes />
        ) : (
          <div className="w-full flex justify-center text-xl pt-4">
            Please login
          </div>
        )}
        {!isLoginModalOpen || <LoginModal />}
      </div>
    </div>
  );
};

export default App;
