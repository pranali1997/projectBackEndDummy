const BOOK_SERVICE = require("../../src/service/book.service");
let response = {};
exports.create = (req, res) => {
  try {
    req.checkBody("TITLE").exists();
    req.checkBody("AUTHOR").exists();
    req
      .checkBody("YEAR")
      .isNumeric()
      .exists();  
    req.checkBody("DESCRIPTION").exists();
    req
      .checkBody("RATING")
      .isNumeric()
      .exists();
    req
      .checkBody("PRICE")
      .isNumeric()
      .exists();
    req.checkBody("NOOFCOUNT").isNumeric();
    // req.checkBody("IMAGEPATH").exists();
    const error = req.validationErrors();
    if (error) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    } else {
      // var count = this.NOOFBOOKCOUNT( req.body.TITLE,req.body.AUTHOR);
      // if (count == true) {
      //   Response = {
      //     success: "validetion false"
      //   };
      //   res.status(500).send(Response);
      // } else {

      BOOK_SERVICE.findone({ TITLE: req.body.TITLE }, function(err, data) {
        if (data == true) {
          response = {
            success: false,
            message: "This Book is already in Data Base......"
          };
          res.status(500).send(response);
        } else {
          var bookData = {
            TITLE: req.body.TITLE,
            AUTHOR: req.body.AUTHOR,
            YEAR: req.body.YEAR,
            DESCRIPTION: req.body.DESCRIPTION,
            RATING: req.body.RATING,
            PRICE: req.body.PRICE,
            BOOKSCOUNT: req.body.NOOFCOUNT,
            IMAGEPATH: req.body.IMAGEPATH
          };

          //}
          BOOK_SERVICE.create(bookData, function(err, data) {
            if (err) {
              response = {
                success: false,
                message: err
              };
              res.status(500).send(response);
            }
            response = {
              success: true,
              data: data
            };
            console.log("in crontoller ------>", data);

            res.status(200).send(data);
          });
        }
      });
    }
  } catch (err) {
    if (err) {
      response = {
        success: "false"
      };
      res.status(500).send(response);
    }
  }
};

exports.getAllBooks = (req, res) => {
  BOOK_SERVICE.getAllBooks({}, function(err, data) {
    console.log(data);
    if (err) {
      res.status(404).send({
        message: err.message || "Soame Error Occurred While Creating"
      });
    }
    res.send(data);
  });
};

// exports.NOOFBOOKCOUNT = (TITLE, AUTHOR) => {
//   console.log("asghsr");

//   if ((AUTHOR == null)) {
//     obj = {
//       TITLE: TITLE
//     };
//     BOOK_SERVICE.updateCount(obj, (err, data) => {
//       if (err) {
//         return err;
//       }
//       return data;
//     });
//   }else{
//     return false
//   }
// };

exports.searchBook = async (req, res) => {
  console.log("asdfdfggh", req.body.TITLE);

  try {
    req.checkBody("TITLE").exists();
    const error = req.validationErrors();
    const response = {};

    if (error) {
      response.success = false;
      response.message = "enter valid details";
      response.error = error;
      return res.status(500).send(response);
    } else {
      bookData = {
        TITLE: await req.body.TITLE
      };
      console.log(bookData);

      BOOK_SERVICE.searchBook(bookData, (err, data) => {
        if (err) {
          response.success = false;
          response.message = "error while getting book data";
          response.err = err;
          return res.status(500).send(response);
        } else {
          response.data = data;
          response.success = true;
          response.message = "successfull done";
          return res.status(200).send(response);
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "error occure " });
  }
};

exports.sortAllBooksByDecPrice = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByDecPrice({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        console.log("response--> ", response);
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

//for sorting books data by ascending order//
exports.sortAllBooksByAscPrice = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByAscPrice({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        console.log("response--> ", response);
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

//for sorting books data by new arrival//
exports.sortAllBooksByNewArrival = (req, res) => {
  try {
    let response = {};
    BOOK_SERVICE.sortAllBooksByNewArrival({}, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };

        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully calculated",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while getting obj" });
  }
};

exports.getBookImage=(req,res)=>{
  try{
    let response={};
    BOOK_SERVICE.getBookImage(obj,(err,data)=>{
      if(err){
        response={
          success: "false",
          message:err
        };
         res.status(200).send(response);
      }else{
        response={
          success:"true",
          message:"successfully getting image",
          data:data
        }
      }
    })
  }
  catch(err){
    res.status(500).send({message: " error while getting image object"})
  }
}