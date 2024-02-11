import { useSelector, useDispatch } from "react-redux";
import { loginSlice } from "../../store/slices/loginSlice";

const User = () => {
  const { currentUser } = useSelector((state) => {
    return state.login;
  });

  const dispatch = useDispatch();

  const content = currentUser ? currentUser.name : "Login";

  const handleClick = () => {
    dispatch(loginSlice.actions.openModal());
  };
  return (
    <div>
      <div onClick={handleClick} className="cursor-pointer">
        {content}
      </div>
    </div>
  );
};

export default User;
