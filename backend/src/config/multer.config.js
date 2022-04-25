const multer = require("multer"),
  path = require("path"),
  dirMulterImg = path.join(__dirname, "../public/img");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dirMulterImg);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const mime = file.mimetype;
  if (
    mime === "image/png" ||
    mime === "image/jpg" ||
    mime === "image/jpeg" ||
    mime === "image/bmp" ||
    mime === "image/webp"
  )
    cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage: storage, fileFilter });

module.exports = upload;
