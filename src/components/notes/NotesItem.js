const NotesItem = ({ note }) => {
  return (
    <div className="text-zinc-200 border border-zinc-600 rounded-md p-4 m-4">
      <h4 className="text-lg mb-2">{note.title}</h4>
      <div className="text-sm">{note.body}</div>
    </div>
  );
};

export default NotesItem;
