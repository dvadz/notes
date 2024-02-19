import { useDeleteNoteMutation } from "../../store/apis/notesApi";

const NotesItem = ({ note }) => {
  const [deleteNote, results] = useDeleteNoteMutation();

  const handleDeleteNote = () => {
    deleteNote(note);
  };

  return (
    <div className="text-zinc-200 border border-zinc-600 rounded-md m-4">
      <h4 className="text-lg m-2">{note.title}</h4>
      <div className="text-md m-2">{note.body}</div>
      <div className="flex justify-end text-sm">
        <button className="m-2">Edit</button>
        <button onClick={handleDeleteNote} className="m-2">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
