module.exports = app => {
  const BOOK_CONTROLLER = require("../controller/book.controller");
  // var multer = require("multer");

  // const FILE_PATH = "uploads";
  // const upload = multer({
  //   dest: `${FILE_PATH}/`
  // });

  app.post("/Books", BOOK_CONTROLLER.create);
  app.get("/getBooks", BOOK_CONTROLLER.getAllBooks);

  // app.post("/FilePath", upload.single("filePath"), (req, res) => {
  //   const avatar = req.file;
  //   console.log(avatar);   
  //   console.log(req.file.path);
  //   if (!avatar) {
  //     res.status(400).send({
  //       status: false,
  //       data: "No file is selected."
  //     });
  //   } else {
  //     res.send(req.file.path);
  //   }
  // });

  
  app.get('/searchBook',BOOK_CONTROLLER.searchBook)
  app.get('/sortBooksLowToHigh',BOOK_CONTROLLER.sortAllBooksByDecPrice)
  app.get('/sortBooksHighToLow',BOOK_CONTROLLER.sortAllBooksByAscPrice)
  app.get('/sortBooksByArrival',BOOK_CONTROLLER.sortAllBooksByNewArrival)
  app.get('/getImage', BOOK_CONTROLLER.getBookImage)
};
