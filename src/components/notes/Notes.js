import NotesList from "./NotesList";
import NotesSearch from "./NotesSearch";
import { useFetchNotesQuery } from "../../store/";

const Notes = () => {
  const user = { userId: 1 };
  const notes = useFetchNotesQuery(user);
  console.log(notes);
  const { data, error, isFetching, isError } = notes;

  console.log(data);
  let content;

  if (isFetching) {
    content = <div>Fetching</div>;
  } else if (isError) {
    console.log(error);
    content = <div>Error</div>;
  } else {
    content = <div>{JSON.stringify(data)}</div>;
  }

  return (
    <div className="h-auto w-full  flex flex-col items-center">
      <NotesSearch />
      {/* <NotesList /> */}
      {content}
    </div>
  );
};

export default Notes;
