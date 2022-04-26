import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { getAllData } from "../helpers/sendData";

const Books = () => {
  const [data, setData] = useState([]);

  const listBook = async () => await getAllData();

  useEffect(() => {
    listBook().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <ListCard data={data} />
    </>
  );
};

export default Books;
