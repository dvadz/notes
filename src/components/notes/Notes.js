import NotesList from "./NotesList";
import NewNote from "./NewNote";
import { useSelector } from "react-redux";

const Notes = () => {
  const user = useSelector((state) => {
    return state.login.currentUser;
  });

  if (user) {
    return (
      <div className="w-full flex flex-col items-center">
        <NewNote />
        <NotesList user={user} />
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center text-xl pt-4">
        Please login
      </div>
    );
  }
};

export default Notes;
