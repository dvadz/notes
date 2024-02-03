import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import Notes from "./notes/Notes.js";

const App = () => {
  return (
    <div className="app bg-zinc-800 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <div>Search</div>
        <div>Refresh</div>
        <div>View</div>
        <div>Settings</div>
        <div>User</div>
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
      </div>
    </div>
  );
};

export default App;
