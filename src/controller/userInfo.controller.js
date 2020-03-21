const USER_INFO_SERVICE = require("../service/userInfo.service");
const verify = require('../utitlity/verify.token');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";
const bcrypt = require('bcryptjs');
const { body, validationErrors } = require('express-validator');

let response = {};
exports.userDetails = (req, res) => {
  try {
    // req.checkBody("NAME").exists();
    // req
    //   .checkBody("PHONE_NO")
    //   .isNumeric()
    //   .exists();
    // req
    //   .checkBody("PIN")
    //   .isNumeric()
    //   .exists();
    // req.checkBody("LOCALITY").exists();
    // req.checkBody("ADDRESS").exists();
    // req.checkBody("CITY_TOWN").exists();
    // req.checkBody("LANDMARK").exists();
    // const error = req.validationErrors();
    if (error) {
      Response = {
        success: "validetion false"
      };
      res.status(500).send(Response);
    } else {
      var userObj = {
        NAME: req.body.NAME,
        PHONE_NO: req.body.PHONE_NO,
        PIN: req.body.PIN,
        LOCALITYNAME: req.body.LOCALITY,
        ADDRESS: req.body.ADDRESS,
        CITY_TOWN: req.body.CITY_TOWN,
        LANDMARK: req.body.LANDMARK,
        EMAIL:req.body.EMAIL,
        PASSWORD:bcrypt.hashSync(req.body.PASSWORD)
      };
    }
    USER_INFO_SERVICE.userDetails(userObj, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          success: "true",
          message: "successfully Details given",
          data: data
        };
        res.status(200).send(response);
      }
    });
  } catch (err) {
    res.status(500).send({ message: "error while storing data" });
  }
};

exports.userInfo = (req, res) => {
  try {
    USER_INFO_SERVICE.userInfo({ email: req.body.email }, (err, data) => {
      if (err) {
        response = {
          success: "false",
          message: err
        };
        res.status(500).send(response);
      } else {
        stored_hash = req.body.password;
        
      }
    })
  }
  catch (err) {
    res.status(200).send({ message: "error while getting data" });
  }
};