const BOOK_SERVICE = require("../../src/service/book.service");
const BOOK_MODULE = require("../../src/module/book.module");
const CHAI = require("chai");
const EXPECT = CHAI.expect;
const ASSERT = CHAI.assert;
const SINON = require("sinon");

describe("Book Controller", function() {
  it("When Send Book Details Should Return status Code", function() {
    let req = {
      body: {
        TITLE: "Abc",
        AUTHOR: "XUZ",
        YEAR: 1996,
        DESCRIPTION: "SFGHJK",
        RATING: 3.2,
        PRICE: 250
      }
    };
    let bookData = req.body;
    SINON.stub(BOOK_MODULE, "create").yields(null, bookData);
    BOOK_SERVICE.create(bookData, function(err, data) {
      if (err) {
        ASSERT.equal(err, "Error While Storing Book Details..");
      }
      console.log("form service", data);
      ASSERT.equal(data, bookData);
    });
  });
  describe("Book Controller", function () {
    it("When Send Book Details Should Return status Code", function () {
      let req = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
      let bookData = req.body;
      SINON.stub(BOOK_MODULE, "create").yields(null, bookData);
      BOOK_SERVICE.create(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "Error While Storing Book Details..");
        }
        console.log("form service", data);
        ASSERT.equal(data, bookData);
      });
    });
  
    it("given book title when correct should return books details ", function () {
      let req = {
        body: {
          TITLE: "ABC"
        }
      };
      let bookData = req.body;
  
      let searchList = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
  
      SINON.stub(BOOK_MODULE, "searchBook").yields(null, bookData);
      BOOK_SERVICE.searchBook(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "error while searching books");
        }
        ASSERT.equal(data.TITLE, searchList.body.TITLE)
      })
    })
  
    it("given book title when null shoud return null data", function () {
      let req = {
        body: {
          TITLE: null
        }
      };
      let bookData = req.body;
  
      let searchList = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
  
      SINON.stub(BOOK_MODULE, "searchBook").yields(null, bookData);
      BOOK_SERVICE.searchBook(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "error while searching books");
        }
        ASSERT.notEqual(data.TITLE, searchList.body.TITLE)
      });
    });
  
    it("given book title when empty should return incorrect data", function () {
      let req = {
        body: {
          TITLE: ""
        }
      };
      let bookData = req.body;
  
      let searchList = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
  
      SINON.stub(BOOK_MODULE, "searchBook").yields(null, bookData);
      BOOK_SERVICE.searchBook(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "error while searching books");
        }
        ASSERT.notEqual(data.TITLE, searchList.body.TITLE)
      })
    });
  
    it("given book title when in number formate should return incorrect data", function () {
      let req = {
        body: {
          TITLE: 123
        }
      };
      let bookData = req.body;
  
      let searchList = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
  
      SINON.stub(BOOK_MODULE, "searchBook").yields(null, bookData);
      BOOK_SERVICE.searchBook(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "error while searching books");
        }
        ASSERT.notEqual(data.TITLE, searchList.body.TITLE)
      })
    });
  
    it("given book title when not correct should return incorrect data", function () {
      let req = {
        body: {
          TITLE: abc123
        }
      };
      let bookData = req.body;
  
      let searchList = {
        body: {
          TITLE: "Abc",
          AUTHOR: "XUZ",
          YEAR: 1996,
          DESCRIPTION: "SFGHJK",
          RATING: 3.2,
          PRICE: 250
        }
      };
  
      SINON.stub(BOOK_MODULE, "searchBook").yields(null, bookData);
      BOOK_SERVICE.searchBook(bookData, function (err, data) {
        if (err) {
          ASSERT.equal(err, "error while searching books");
        }
        ASSERT.notEqual(data.TITLE, searchList.body.TITLE)
      })
    });
  
  
  });

});
