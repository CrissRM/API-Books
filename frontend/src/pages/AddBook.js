import React from "react";
import Form from "../components/Form";
import { sendData } from "../helpers/sendData";

const AddBook = () => {
  const initialData = {
    title: "",
    author: "",
    genre: "",
    description: "",
  };
  return (
    <>
      <Form handleAxios={sendData} initialData={initialData} srcImg="" />
    </>
  );
};

export default AddBook;
