const config = {
  App: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },
  Mongoose: {
    protocolo: process.env.MONGOOSE_PROTOCOLO,
    host: process.env.MONGOOSE_HOST,
    port: process.env.MONGOOSE_PORT,
    name: process.env.MONGOOSE_NAME,
  },
  Cloudinary: {
    name: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
  },
};

module.exports = config;
