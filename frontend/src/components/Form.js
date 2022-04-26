import React from "react";

const Form = () => {
  return (
    <>
      <div className="container  justify-content-center">
        <div className="row">
          <div className="container col-10">
            <form className="container col-12 mt-5">
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col-12 col-md-5">
                  <div className="col-12">
                    <label for="formFile" class="form-label">
                      Carga una imagen
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="col-12 container-img-book">
                    <div className="responsive-img">
                      <img
                        src="https://res.cloudinary.com/developmentcrissroldan/image/upload/v1649733592/sin-imagen_wyliqu.png"
                        className="img-fluid-book"
                        alt="sin-imagen"
                      />
                      <div className="container mt-5">
                        <button type="submit" className="btn btn-primary">
                          Add Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">
                      Titulo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="titulo"
                      aria-describedby="emailHelp"
                      name="title"
                    />
                    <div className="form-text">
                      <i>Campo obligatorio</i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="author" className="form-label">
                      Autor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      name="author"
                    />
                    <div className="form-text">
                      <i>Campo obligatorio</i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="genre" className="form-label">
                      Genero
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="genre"
                      name="genre"
                    />
                    <div className="form-text">
                      <i>Campo obligatorio</i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Descripcion
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="5"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
