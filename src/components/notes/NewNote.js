import { useState } from "react";
import { useAddNoteMutation } from "../../store";
import { useSelector } from "react-redux";

const NewNote = () => {
  const [isFormOpen, SetIsFormOpen] = useState(false);
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");
  const user = useSelector((state) => {
    return state.login.currentUser;
  });

  const [addNote, results] = useAddNoteMutation();

  const handleClick = (event) => {
    SetIsFormOpen(true);
  };

  const handleTitleChange = (event) => {
    SetTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    SetBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: where is user coming from?
  };

  let content;

  if (isFormOpen === false)
    content = (
      <div
        onClick={handleClick}
        className="my-5 mx-10 p-2 border rounded-md border-zinc-600 text-zinc-400 w-full max-w-lg min-w-96"
      >
        Take a note
      </div>
    );
  else {
    content = (
      <div className="newnote m-5 text-zinc-400 w-full max-w-lg min-w-96">
        <form className="m-2 p-2 border rounded-md border-zinc-600">
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
          <div className="flex justify-end">
            <button type="submit" className="hover:text-zinc-100">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  return <>{content}</>;
};

export default NewNote;
