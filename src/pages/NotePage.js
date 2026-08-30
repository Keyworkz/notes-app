import React from "react";
import { useParams } from "react-router-dom";
import notes from "../assets/data";

const NotePage = () => {
  const { id } = useParams();
  let note = notes.find((note) => note.id === Number(id));
  return <div>{note?.body}</div>;
};

export default NotePage;
