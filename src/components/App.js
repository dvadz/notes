import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";

const App = () => {
  return (
    <div className="app h-screen bg-zinc-800 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <div>Search</div>
        <div>Refresh</div>
        <div>View</div>
        <div>Settings</div>
        <div>User</div>
      </Navbar>
      <div>
        <Menu>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </Menu>
        <div>notes</div>
      </div>
    </div>
  );
};

export default App;
