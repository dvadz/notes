import NotesList from "./NotesList";
import NewNote from "./NewNote";
import { useFetchNotesQuery } from "../../store/";
import { useSelector } from "react-redux";

const Notes = () => {
  const user = useSelector((state) => {
    return state.login.currentUser;
  });

  const notes = useFetchNotesQuery(user);
  const { data, error, isFetching, isError } = notes;

  let content;

  if (isFetching) {
    content = <div>Fetching</div>;
  } else if (isError) {
    console.log(error);
    content = <div>Error</div>;
  } else {
    content = <NotesList notes={data} />;
  }

  // TODO: add a load spinner or skeleton

  return (
    <div className="w-full flex flex-col items-center">
      <NewNote />
      {content}
    </div>
  );
};

export default Notes;
