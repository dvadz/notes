import NotesItem from "./NotesItem";

const NotesList = ({ notes }) => {
  const mappedNotes = notes.map((note) => {
    return <NotesItem key={note.id} note={note} />;
  });

  return <div className="">{mappedNotes}</div>;
};

export default NotesList;
