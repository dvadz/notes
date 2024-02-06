import NotesList from "./NotesList";
import NotesSearch from "./NotesSearch";
import { useFetchNotesQuery } from "../../store/";

const Notes = () => {
  const user = { userId: 1 };
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
      <NotesSearch />
      {content}
    </div>
  );
};

export default Notes;
