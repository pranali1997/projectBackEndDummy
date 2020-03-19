// const BOOK_CONTROLLER = require("../../src/controller/book.controller");
// const BOOK_SERVICE = require("../../src/service/book.service");
// const BOOK_MODULE = require("../../src/module/book.module");

// ExpressValidator = require('express-validator')
// const CHAI = require("chai");
// const EXPECT = CHAI.expect;
// const ASSERT = CHAI.assert;
// const SINON = require("sinon");

// stubReq = require('req').stubForValidation

// exports.stubForValidation = ((done) =>{
//     req = {
//         body:{
//         "TITLE": "Abc",
//         "AUTHOR": "XUZ",
//         "YEAR": 1996,
//         "DESCRIPTION": "SFGHJK",
//         "RATING": 3.2,
//         "PRICE": 250
//         }}
//     })
//     let res = {
//         send: SINON.spy(),
//         status: SINON.stub().returns({ send: SINON.spy() })
//         // send:function(){},
//         // status:function(){}
//       };
// validateNew = require()

// describe("Book Controller", function() {
//   it("When Send Book Details Should Return status Code", function() {

//     // exports.stubForValidation = (done) =>{
//     // req = 
//     //     body={
//     //     "TITLE": "Abc",
//     //     "AUTHOR": "XUZ",
//     //     "YEAR": 1996,
//     //     "DESCRIPTION": "SFGHJK",
//     //     "RATING": 3.2,
//     //     "PRICE": 250
//     //     }
//     // ExpressValidator (req,{}, =>{
//     //     done(req)
//     // })
// //}
//     // let req = {
//     //   body: {
//     //     "TITLE": "Abc",
//     //     "AUTHOR": "XUZ",
//     //     "YEAR": 1996,
//     //     "DESCRIPTION": "SFGHJK",
//     //     "RATING": 3.2,
//     //     "PRICE": 250
//     //   }
//     // };
//     // let res = {
//     //   send: SINON.spy(),
//     //   status: SINON.stub().returns({ send: SINON.spy() })
//     //   // send:function(){},
//     //   // status:function(){}
//     // };
//     // let res = {
//     //     end: function(){},
//     //    // status: function(s) {this.statusCode = 200; return this;}
//     // }
//     // req = null
   
//     beforeEach ((done) => {
//         stubReq = (r) => {
//             req = r
//             done()
//         }
//     })
//     let bookData = req.body;
//     validateNew(req).should.be.false

//     req.validationErrors(true).TITLE.message.should.equal('title is require')
//     SINON.stub(BOOK_SERVICE, "create").yields(null, bookData);
//     BOOK_CONTROLLER.create(req, res);
//     SINON.assert.calledWith(BOOK_SERVICE.create, req.body);
//     // SINON.stub(BOOK_MODULE, "create").callsFake(function() {});
//     SINON.assert.calledWith(res.status, 200);
//     SINON.assert.calledOnce(res.status(200).send);
//     // EXPECT(res.send).to.equal(true);
//     // mock
//     //   .EXPECT(res.send)
//     //   .once()
//     // //   .withExactArgs("true");
//     // mock.verify();
//   });
// });
