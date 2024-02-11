import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import Notes from "./notes/Notes.js";
import User from "./user/User.js";
import LoginModal from "./login/LoginModal.js";
import { useSelector } from "react-redux";

const App = () => {
  const isLoginModalOpen = useSelector((state) => {
    return state.login.isLoginModalOpen;
  });

  return (
    <div className="app bg-zinc-800 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <div>Search</div>
        <div>Refresh</div>
        <div>View</div>
        <div>Settings</div>
        <User></User>
      </Navbar>
      <div className="flex">
        <Menu>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </Menu>
        <Notes />
        {!isLoginModalOpen || <LoginModal />}
      </div>
    </div>
  );
};

export default App;
