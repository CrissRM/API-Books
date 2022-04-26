import React from "react";
import Card from "./Card";

const ListCard = ({ data }) => {
  return (
    <section className="container-cards">
      {data.map((el) => {
        return <Card data={el} />;
      })}
    </section>
  );
};

export default ListCard;
