import React from "react";
import notes from "../assets/data";

const NotesPage = () => {
  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.body}</p>
      ))}
    </div>
  );
};

export default NotesPage;
