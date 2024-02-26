import { useSelector } from "react-redux";
import { useState } from "react";
import LoginModal from "../login/LoginModal";
import LogoutModal from "../login/LogoutModal";

const User = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const { isLoggedIn, currentUser } = useSelector((state) => {
    return state.login;
  });

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenLogout = () => {
    setIsLogOutModalOpen(true);
  };

  const handleCloseLogout = () => {
    setIsLogOutModalOpen(false);
  };

  const handleClick = () => {
    if (isLoggedIn === false) {
      handleOpenLogin();
    } else {
      handleOpenLogout();
    }
  };

  return (
    <div>
      <div onClick={handleClick} className="cursor-pointer">
        {currentUser ? currentUser.name : "Login"}
      </div>
      {isLoginModalOpen && <LoginModal closeModal={handleCloseLogin} />}
      {isLogOutModalOpen && <LogoutModal closeModal={handleCloseLogout} />}
    </div>
  );
};

export default User;
