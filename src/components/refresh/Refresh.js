import { useSelector } from "react-redux";
import { useFetchNotesQuery } from "../../store";

const Refresh = () => {
  const user = useSelector((state) => {
    return state.login.currentUser;
  });

  const skip = user === null ? true : false;

  const { refetch } = useFetchNotesQuery(user, { skip });

  const handleClick = () => {
    if (user) refetch();
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      Refresh
    </div>
  );
};

export default Refresh;
