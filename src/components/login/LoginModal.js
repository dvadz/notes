import ReactDOM from "react-dom";
import { loginSlice } from "../../store/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsersQuery } from "../../store/apis/usersApi";
import UserItem from "./UserItem";

const LoginModal = () => {
  const { data, isFetching, error } = useFetchUsersQuery();

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginSlice.actions.closeModal());
  };

  const handleLogin = () => {
    dispatch(loginSlice.actions.closeModal());
    dispatch(loginSlice.actions.login());
  };

  let content;

  if (isFetching) {
    content = "fetching";
  } else if (error) {
    content = "Error";
  } else {
    const mappedData = data.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });

    content = (
      <div className="border bg-black opacity-100 p-2">
        <div>{mappedData}</div>
        <button onClick={handleLogin} className="border rounded-md p-2 ">
          Login
        </button>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 text-white bg-zinc-700 opacity-90"
        onClick={handleClick}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-white">
        {content}
      </div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default LoginModal;
