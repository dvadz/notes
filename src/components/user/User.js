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

  if (isLoggedIn === false) {
    return (
      <div>
        <div onClick={handleOpenLogin} className="cursor-pointer">
          Login
        </div>
        {isLoginModalOpen && <LoginModal closeModal={handleCloseLogin} />}
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={handleOpenLogout}>{currentUser.name}</div>
        {isLogOutModalOpen && <LogoutModal closeModal={handleCloseLogout} />}
      </div>
    );
  }
};

export default User;
