const { Schema, model } = require("mongoose");

const myBooksSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es requerido"],
      trim: true,
    },
    author: {
      type: String,
      trim: true,
      required: [true, "El nombre del author es requerdio"],
    },
    description: {
      type: String,
      trim: true,
    },
    genre: {
      type: String,
      trim: true,
      required: [true, "El genero es requerido"],
    },
    image: {
      type: String,
      trim: true,
    },
    public_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("MyBooks", myBooksSchema);
