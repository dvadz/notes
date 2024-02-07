const NewNote = () => {
  return (
    <div>
      <form className="m-5 p-2 border rounded-md border-zinc-600">
        <textarea
          placeholder="Take a note"
          name=""
          id=""
          cols="30"
          rows="1"
          className="bg-zinc-800 text-white"
        ></textarea>
      </form>
    </div>
  );
};

export default NewNote;
