import MenuItem from "./MenuItem";

const Menu = ({ children }) => {
  const renderedChildren = children.map((child, count) => {
    return <MenuItem key={count}>{child}</MenuItem>;
  });

  return (
    <div className="h-screen w-20 border flex flex-col items-center">
      {renderedChildren}
    </div>
  );
};

export default Menu;
