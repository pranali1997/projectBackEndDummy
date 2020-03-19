const BOOK_MODULE = require("../../src/module/book.module");

exports.create = (bookData, callback) => {
  console.log("In service===>", bookData);

  BOOK_MODULE.create(bookData, function(err, data) {
    if (err) {
      return callback(err);
    }
    console.log("SERVICE RES", typeof data);

    return callback(null, data);
  });  
};

exports.getAllBooks = (obj, callback) => {
  BOOK_MODULE.getAllBooks(obj, function(err, data) {
    console.log(data);
    if (err) {
      callback(err);
    }
    callback(null, data);
  });
};

exports.searchBook = (bookData, callBack) => {
  BOOK_MODULE.searchBook(bookData, (err, data) => {
    if (err) {
      return callBack(err, null);
    } else if (data !== null) {
      return callBack(null, data);
    }
  });
};

exports.updateCount = (data, callBack) => {
  console.log("asfsdh");

  BOOK_MODULE.updateCount(data, (err, data) => {
    if (err) {
      return callBack(err);
    }
    return callBack(null, data);
  });
};

exports.sortAllBooksByDecPrice = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByDecPrice(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.sortAllBooksByAscPrice = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByAscPrice(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.sortAllBooksByNewArrival = (obj, callback) => {
  BOOK_MODULE.sortAllBooksByNewArrival(obj, (err, data) => {
    if (err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

exports.findone = (obj, callBack) => {
  BOOK_MODULE.findone(obj, (err, data) => {
    if (err) {
      return callBack(err);
    }
    return callBack(null, data);
  });
};

exports.getBookImage=(obj,callBack)=>{
  BOOK_MODULE.getBookImage(obj,(err,data)=>{
    if(err){
      return callBack(err);
    }
    return callBack(null,data);
  })
}