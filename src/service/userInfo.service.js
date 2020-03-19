
const USER_INFO_MODULE = require("../module/userInfo.module");


exports.userDetails=(obj, callback)=>{
    USER_INFO_MODULE.create(obj, (err,data) => {
      if(err){
        return callback(err)
      }
      return callback(null,data)
    })
  } 
  exports.userInfo=(obj,callback)=>{
    USER_INFO_MODULE.find(obj,(err,data)=>{
      if(err){
        return callback(err)
      }
      return callback(null,data)
    })
  }

  exports. findToken=(data, callback) =>{
    console.log(data);
    USER_INFO_MODULE.findToken(data)
        .then(data => {
            
            return callback(null, data)
        }).catch(err => {
            return callback({ message: "Error while retrieving login id" })
        })

}