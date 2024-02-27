import { useDeleteNoteMutation } from "../../store/apis/notesApi";
import { useState } from "react";
import NoteEditModal from "./NoteEditModal";

const NotesItem = ({ note }) => {
  const [isNoteEditModalOpen, setIsNoteEditModalOpen] = useState(false);

  const [deleteNote, results] = useDeleteNoteMutation();

  const handleDeleteNote = () => {
    deleteNote(note);
  };

  const handleOpenModal = () => {
    setIsNoteEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsNoteEditModalOpen(false);
  };

  return (
    <div className="text-zinc-200 border border-zinc-600 rounded-md">
      <h4 className="text-lg m-2">{note.title}</h4>
      <div className="text-md m-2">{note.body}</div>
      <div className="flex justify-end text-sm">
        <button onClick={handleOpenModal} className="m-2">
          Edit
        </button>
        <button onClick={handleDeleteNote} className="m-2">
          Delete
        </button>
        {isNoteEditModalOpen && (
          <NoteEditModal note={note} closeModal={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default NotesItem;
