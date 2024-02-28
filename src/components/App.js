import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import Notes from "./notes/Notes.js";
import User from "./user/User.js";
import Refresh from "./refresh/Refresh.js";
import Search from "./search/Search.js";

const App = () => {
  return (
    <div className="app h-screen bg-zinc-800 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <Search />
        <Refresh />
        <div>View</div>
        <div>Settings</div>
        <User />
      </Navbar>
      <div className="menu-notes flex">
        <Menu>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </Menu>
        <Notes />
      </div>
    </div>
  );
};

export default App;
