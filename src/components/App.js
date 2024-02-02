import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app h-screen bg-gray-950 text-white">
      <Navbar>
        <div>Menu</div>
        <div>Home</div>
        <div>Search</div>
        <div>Refresh</div>
        <div>View</div>
        <div>Settings</div>
        <div>User</div>
      </Navbar>
    </div>
  );
};

export default App;
