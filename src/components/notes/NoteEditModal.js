import { useEffect, useState } from "react";
import { useEditNoteMutation } from "../../store";
import Modal from "../modal/Modal";

const NoteEditModal = ({ note, closeModal }) => {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [editNote, results] = useEditNoteMutation();

  useEffect(() => {
    if (!isModalOpen) {
      closeModal();
    }
  }, [isModalOpen, closeModal]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editNote({ ...note, title, body });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (results.isSuccess && isModalOpen) {
    handleCloseModal();
  }

  const header = "";
  const content = (
    <div className="editnote">
      <input
        placeholder="Title"
        className="w-full bg-inherit"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="w-full mt-2 resize-none bg-inherit"
        placeholder="Take a note..."
        name=""
        id=""
        rows="4"
        value={body}
        onChange={handleBodyChange}
      ></textarea>
    </div>
  );

  const actionBar = (
    <div>
      <button onClick={handleCloseModal} className="mr-4">
        Cancel
      </button>
      <button
        type="submit"
        className="hover:text-zinc-100"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );

  return (
    <Modal header={header} actionBar={actionBar} closeModal={closeModal}>
      {content}
    </Modal>
  );
};

export default NoteEditModal;
