module.exports = app => {
  const USER_INFO_CONTROLLER = require("../controller/userInfo.controller");
  app.post("/userDetails", USER_INFO_CONTROLLER.userDetails);
  app.get("/userDetails",USER_INFO_CONTROLLER.userInfo);
  app.post('/find/token',USER_INFO_CONTROLLER.findToken);

};
 