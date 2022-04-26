import React, { useState, useRef } from "react";

const Form = () => {
  const initialData = {
    title: "",
    author: "",
    genre: "",
    description: "",
  };

  const withImg = {
    marginTop: "1rem",
    width: "75%",
    height: "15rem",
    border: "none",
    borderRadius: "1.5rem",
    overflow: "hidden",
  };

  const withhoutImg = {
    marginTop: "1rem",
    width: "75%",
    border: "2px dashed",
  };

  const [form, setForm] = useState(initialData);
  const [src, setSrc] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando datos al backend");
  };

  const handleFile = () => {
    const file = inputRef.current.files[0],
      image = URL.createObjectURL(file);

    setSrc(image);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <div className="container  justify-content-center">
        <div className="row">
          <div className="container col-10">
            <form
              className="container col-12 mt-5"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col-12 col-md-5">
                  <div className="col-12">
                    <label htmlFor="formFile" className="form-label">
                      Carga una imagen
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="image"
                      onChange={(e) => handleFile(e)}
                      ref={inputRef}
                    />
                  </div>
                  <div className="col-12 container-img-book">
                    <div style={src === "" ? withhoutImg : withImg}>
                      <img src={src} className="img-fluid-book" alt="add-img" />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-7 mt-5 mt-md-0">
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
                      value={form.title}
                      onChange={(e) => handleInput(e)}
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
                      value={form.author}
                      onChange={(e) => handleInput(e)}
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
                      value={form.genre}
                      onChange={(e) => handleInput(e)}
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
                      value={form.description}
                      onChange={(e) => handleInput(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 container-btn">
                  <button type="submit" className="btn btn-primary">
                    Add Book
                  </button>
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
