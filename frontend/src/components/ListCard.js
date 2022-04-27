import React from "react";
import Card from "./Card";
import Modal from "./Modal";

const ListCard = ({ data, handleDelete }) => {
  return (
    <section className="container-cards">
      {data.map((el) => (
        <Card data={el} key={el._id} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default ListCard;
