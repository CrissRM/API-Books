import React, { useState } from "react";
import Form from "./Form";
import Modal from "./Modal";
import { putData } from "../helpers/sendData";

const Card = ({ data, handleDelete }) => {
  const { title, author, genre, description, image, _id } = data;

  const [modal, setModal] = useState(true);

  const handleDeleteClick = () => {
    handleDelete(_id);
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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Editar
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteClick}
          >
            Eliminar
          </button>
        </div>
      </article>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {
                <Form
                  handleAxios={putData(_id)}
                  initialData={(title, author, genre, description)}
                  srcImg={image}
                />
              }
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

{
  /* {modal && <Modal data={data} />} */
}

{
  /* <Modal data={data} /> */
}
