import { useFetchNotesQuery } from "../../store/apis/notesApi";
import NotesItem from "./NotesItem";

const NotesList = ({ user }) => {
  const notes = useFetchNotesQuery(user);
  const { data, error, isFetching, isError } = notes;

  if (isFetching) {
    return <div>Fetching</div>;
  } else if (isError) {
    console.log(error);
    return <div>Error</div>;
  } else {
    const mappedNotes = data.map((note) => {
      return <NotesItem key={note.id} note={note} />;
    });
    return <div>{mappedNotes}</div>;
  }
};

export default NotesList;
