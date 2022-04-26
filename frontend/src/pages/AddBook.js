import React from "react";
import Form from "../components/Form";
import {sendData} from "../helpers/sendData";

const AddBook = () => {
  return (
    <>
      <Form handleAxios={sendData} />
    </>
  );
};

export default AddBook;
