import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/loginSlice";

import Modal from "../modal/Modal";

const LogoutModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    closeModal();
  };

  const header = "Logout";
  const actionBar = (
    <div>
      <button className="mr-4" onClick={closeModal}>
        Cancel
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

  return (
    <Modal header={header} actionBar={actionBar} closeModal={closeModal}>
      Do you want to logout ?
    </Modal>
  );
};

export default LogoutModal;
