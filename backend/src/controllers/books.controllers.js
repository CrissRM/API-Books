const MyBooks = require("../model/Books"),
  fse = require("fs-extra"),
  path = require("path"),
  dirDelImg = path.join(__dirname, "../public/img"),
  cloudinary = require("../config/cloudinary.config"),
  book = {};

book.getAllData = async (req, res) => {
  try {
    const allData = await MyBooks.find();
    res.json(allData);
  } catch (err) {
    res.json({ error: err });
  }
};

book.getOneData = async (req, res) => {
  const getBook = await MyBooks.findById(req.params.id);
  res.send(getBook);
};

book.postData = async (req, res) => {
  try {
    if (req.file.size > 1000000)
      res.json({ error: "El archivo no debe superar 1Mb" });
    else {
      try {
        const options = {
          folder: "myBooks",
        };
        const imgCloud = await cloudinary.uploader.upload(
          req.file.path,
          options
        );

        try {
          const { title, author, description, genre } = req.body;
          const newPost = await new MyBooks({
            title,
            author,
            description,
            genre,
            image: imgCloud.url,
            public_id: imgCloud.public_id,
          });

          await newPost.save();
          await fse.emptyDir(dirDelImg);
          res.json({ success: true });
        } catch (error) {
          res.json({ error });
        }
      } catch (error) {
        res.json({ error });
      }
    }
  } catch (error) {
    res.json({ error: "Extensión no aceptada" });
  }
};

book.putData = async (req, res) => {
  try {
    const lastImg = await MyBooks.findById(req.params.id);
    try {
      const { title, author, description, genre } = req.body;

      if (!req.file) {
        await MyBooks.findByIdAndUpdate(req.params.id, {
          title,
          author,
          description,
          genre,
        });
        await fse.emptyDir(dirDelImg);
        res.send({ success: true });
      } else {
        try {
          await cloudinary.uploader.destroy(lastImg.public_id);
          const options = {
            folder: "myBooks",
          };
          try {
            const putImg = await cloudinary.uploader.upload(
              req.file.path,
              options
            );

            await MyBooks.findByIdAndUpdate(req.params.id, {
              title,
              author,
              description,
              genre,
              image: putImg.url,
              public_id: putImg.public_id,
            });
            await fse.emptyDir(dirDelImg);
            res.send({ success: true });
          } catch (error) {
            res.json({ error });
          }
        } catch (error) {
          res.json({ error });
        }
      }
    } catch (err) {
      res.json({ err: "no es en cloud" });
    }
  } catch (error) {
    res.json({ error });
  }
};

book.deleteData = async (req, res) => {
  const deleteImg = await MyBooks.findById(req.params.id);
  try {
    await cloudinary.uploader.destroy(deleteImg.public_id);
    try {
      await MyBooks.findByIdAndRemove(req.params.id);
      res.send({ succes: "Archivo eliminado" });
    } catch (err) {
      res.json(err);
    }
  } catch (error) {
    res.json({ error });
  }
};

module.exports = book;
