import { useSelector } from "react-redux";

const User = () => {
  const currentUser = useSelector((state) => {
    return state.login.currentUser;
  });

  if (!currentUser) return <div>Login</div>;

  return <div>{currentUser.name}</div>;
};

export default User;
