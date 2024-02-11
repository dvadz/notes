import ReactDOM from "react-dom";
import { loginSlice } from "../../store/slices/loginSlice";
import { useDispatch } from "react-redux";

const LoginModal = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginSlice.actions.closeModal());
  };

  return ReactDOM.createPortal(
    <div
      className="absolute inset-0 text-white bg-zinc-700 opacity-90 flex justify-center items-center"
      onClick={handleClick}
    >
      <div className="border bg-black opacity-100">
        <div>List of users</div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
};

export default LoginModal;
