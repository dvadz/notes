const findNotesContainingTheSearchTerm = (notesArray, searchTerm) => {
  const results = notesArray.filter((note) => {
    if (String(note.title).toLowerCase().includes(searchTerm.toLowerCase()))
      return true;
    else if (String(note.body).toLowerCase().includes(searchTerm.toLowerCase()))
      return true;
    else return false;
  });
  return results;
};

export { findNotesContainingTheSearchTerm };
