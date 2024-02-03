import NavbarItem from "./NavbarItem";

const Navbar = ({ children }) => {
  const renderedChildren = children.map((child, count) => {
    return <NavbarItem key={count}>{child}</NavbarItem>;
  });
  return (
    <div className="w-full border flex flex-row justify-between items-center">
      {renderedChildren}
    </div>
  );
};

export default Navbar;
