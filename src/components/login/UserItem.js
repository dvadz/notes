import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "../../store/slices/loginSlice";

const User = ({ user }) => {
  const selectedUser = useSelector((state) => {
    return state.login.selectedUser;
  });

  const dispatch = useDispatch();

  const className = user === selectedUser ? "bg-zinc-800" : "";

  const handleClick = () => {
    dispatch(loginSlice.actions.selectUser(user));
  };

  return (
    <div className={"p-2 hover:bg-zinc-800 " + className} onClick={handleClick}>
      {user.name}
    </div>
  );
};

export default User;
