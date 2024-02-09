import { useRef, useState } from "react";

const NewNote = () => {
  const [isFormOpen, SetIsFormOpen] = useState(false);
  const noteForm = useRef();

  const handleClick = (event) => {
    SetIsFormOpen(true);
  };

  let content;

  if (!isFormOpen)
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
      <div className="newnote m-5 bg-zinc-800 text-zinc-400 w-full max-w-lg min-w-96">
        <form className="m-2 p-2 border rounded-md border-zinc-600">
          <input
            placeholder="Title"
            className="w-full bg-inherit"
            type="text"
            name="title"
            id="title"
          />
          <textarea
            className="w-full bg-inherit mt-2 resize-none"
            placeholder="Take a note..."
            name=""
            id=""
            rows="4"
          ></textarea>
        </form>
      </div>
    );
  }

  return <>{content}</>;
};

export default NewNote;
