import { loginSlice } from "../../store/slices/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFetchUsersQuery } from "../../store/apis/usersApi";
import Modal from "../modal/Modal";
import UserItem from "./UserItem";

const LoginModal = () => {
  const { data, isFetching, error } = useFetchUsersQuery();

  const dispatch = useDispatch();

  const { isModalOpen } = useSelector((state) => {
    return state.login;
  });

  const handleLogin = () => {
    dispatch(loginSlice.actions.closeModal());
    dispatch(loginSlice.actions.login());
  };

  let header, content, actionBar;

  if (isFetching) {
    content = "fetching";
  } else if (error) {
    header = "Error";
    content = "Try again later.";
  } else {
    const mappedUsers = data.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });

    header = "Select your username";
    content = mappedUsers;
    actionBar = (
      <div>
        <button onClick={handleLogin} className="border rounded-md p-2">
          Login
        </button>
      </div>
    );
  }

  if (isModalOpen) {
    return (
      <Modal actionBar={actionBar} header={header}>
        {content}
      </Modal>
    );
  } else {
    return <div></div>;
  }
};

export default LoginModal;
