import { login } from "../../store/slices/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsersQuery } from "../../store/apis/usersApi";
import Modal from "../modal/Modal";
import UserItem from "./UserItem";

const LoginModal = ({ closeModal }) => {
  const { data, isFetching, error } = useFetchUsersQuery();
  const selectedUser = useSelector((state) => {
    return state.login.selectedUser;
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(login());
      closeModal();
    }
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

  return (
    <Modal actionBar={actionBar} header={header} closeModal={closeModal}>
      {content}
    </Modal>
  );
};

export default LoginModal;
