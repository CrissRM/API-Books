import axios from "axios/dist/axios";

const sendData = async (data) => {
  const formData = new FormData();
  for (const prop in data) {
    formData.append(prop, data[prop]);
  }

  const res = await axios({
    method: "POST",
    url: "http://localhost:5000/api-books/",
    data: formData,
  });

  console.log(res);
};

export default sendData;
