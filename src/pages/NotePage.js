import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import notes from "../assets/data";

function NotePage() {
  let noteId = matchMedia.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`http://localhost:8000/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  return <div>{note?.body}</div>;
}

export default NotePage;
