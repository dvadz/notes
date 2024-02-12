import ReactDOM from "react-dom";
import { loginSlice } from "../../store/slices/loginSlice";
import { useDispatch } from "react-redux";
import { useFetchUsersQuery } from "../../store/apis/usersApi";

const LoginModal = () => {
  const { data, isFetching, error } = useFetchUsersQuery();

  console.log(data);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginSlice.actions.closeModal());
  };

  let content;

  if (isFetching) {
    content = "fetching";
  } else if (error) {
    content = "Error";
  } else {
    const mappedData = data.map((user) => {
      return <div key={user.id}>{user.name}</div>;
    });

    content = (
      <div className="border bg-black opacity-100">
        <div>{mappedData}</div>
        <button onClick={handleClick}>Login</button>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div>
      <div
        className="absolute inset-0 text-white bg-zinc-700 opacity-90"
        onClick={handleClick}
      ></div>
      <div className="absolute inset-40 text-white">{content}</div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default LoginModal;
