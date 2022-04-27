import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { getAllData, deleteData } from "../helpers/sendData";

const Books = () => {
  const [data, setData] = useState([]);

  const listBook = async () => await getAllData();

  const handleDelete = async (id) => {
    await deleteData(id);
    const res = await listBook();
    setData(res.data);
  };

  useEffect(() => {
    listBook().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <ListCard data={data} handleDelete={handleDelete} />
    </>
  );
};

export default Books;
