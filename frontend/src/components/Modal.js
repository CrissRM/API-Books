import React from "react";
import Form from "./Form";
import { putData } from "../helpers/sendData";

const Modal = ({ data }) => {
  const { title, author, genre, description, image, _id } = data;

  const initialData = { title, author, genre, description };
  return (
    <>
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
                  initialData={initialData}
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

export default Modal;
