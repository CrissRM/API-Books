import axios from "axios/dist/axios";

export const sendData = async (data) => {
  const formData = new FormData();
  for (const prop in data) {
    formData.append(prop, data[prop]);
  }
  try {
    await axios({
      method: "POST",
      url: "http://localhost:5000/api-books/",
      data: formData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllData = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:5000/api-books/",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://localhost:5000/api-books/${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const putData = async (id) => {
  try {
    await axios({
      method: "PUT",
      url: `http://localhost:5000/api-books/${id}`,
    });
  } catch (error) {
    console.log(error);
  }
};

// "https://jsonplaceholder.typicode.com/users/"
