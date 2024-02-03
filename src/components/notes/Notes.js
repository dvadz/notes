import NotesList from "./NotesList";
import NotesSearch from "./NotesSearch";

const Note = () => {
  return (
    <div className="h-auto w-full border flex flex-col items-center">
      <NotesSearch />
      <NotesList />
    </div>
  );
};

export default Note;
