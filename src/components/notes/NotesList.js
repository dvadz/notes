import { useSelector } from "react-redux";
import { useFetchNotesQuery } from "../../store/apis/notesApi";
import NotesItem from "./NotesItem";
import { findNotesContainingTheSearchTerm } from "./findNotesContainingTheSearchTerm";

const NotesList = ({ user }) => {
  const searchTerm = useSelector((state) => state.login.searchTerm);

  const { data, error, isFetching, isError } = useFetchNotesQuery(user);

  const notes =
    searchTerm && searchTerm.length >= 2
      ? findNotesContainingTheSearchTerm(data, searchTerm)
      : data;

  if (isFetching) {
    return <div>Fetching</div>;
  } else if (isError) {
    console.log(error);
    return <div>Error</div>;
  } else {
    const mappedNotes = notes.map((note) => {
      return <NotesItem key={note.id} note={note} />;
    });
    return (
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-8">
        {mappedNotes}
      </div>
    );
  }
};

export default NotesList;
