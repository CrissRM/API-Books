const { Cloudinary } = require("../config");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: Cloudinary.name,
  api_key: Cloudinary.apiKey,
  api_secret: Cloudinary.apiSecret,
  secure: true,
});

module.exports = cloudinary;
