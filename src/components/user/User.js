import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../store/slices/loginSlice";
import LoginModal from "../login/LoginModal";

const User = () => {
  const { isLoggedIn, currentUser } = useSelector((state) => {
    return state.login;
  });

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  if (isLoggedIn === false) {
    return (
      <div>
        <div onClick={handleOpenModal} className="cursor-pointer">
          Login
        </div>
        <LoginModal />
      </div>
    );
  } else {
    return <div>{currentUser.name}</div>;
    // TODO: add logout modal here
  }
};

export default User;
