import React from "react";
import { deleteData } from "../helpers/sendData";

const Card = ({ data }) => {
  const { title, author, genre, description, image, _id } = data;

  const handleDelete = (_id) => {
    deleteData(_id);
  };

  return (
    <>
      <article className="article-card">
        <img src={image} className="image-card" alt={title} />
        <div className="card-info-book">
          <h5 className="card-title">
            <i>{title}</i>
          </h5>
          <p>
            <b>
              <i>Autor: </i>
            </b>
            {author}
          </p>
          <p>
            <b>
              <i>Genero: </i>
            </b>
            {genre}
          </p>
          <p className="card-text">{description}</p>
        </div>

        <div className="container-btn">
          <button type="button" class="btn btn-primary ">
            Editar
          </button>
          <button type="button" class="btn btn-danger" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
      </article>
    </>
  );
};

export default Card;
