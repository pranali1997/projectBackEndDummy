const MONGOOSE = require("mongoose");

const USER_DETAIL_SCHEMA = MONGOOSE.Schema(
    {
        NAME: { type: String, require: true },
        PHONE_NO: { type: Number, require: true },
        PIN: { type: Number, require: true },
        LOCALITY: { type: String, require: true },
        ADDRESS: { type: String, require: true },
        CITY_TOWN: { type: String, require: true },
        LANDMARK: { type: String, require: true },
        EMAIL: { type: String, require: true },
        PASSWORD: { type: String, require: true }
    },
    { timestamps: true }
)

const USERDETAILS = MONGOOSE.model("userdata", USER_DETAIL_SCHEMA)

exports.create = (userData, callback) => {
    const USERDETAILSS = new USERDETAILS();
    USERDETAILSS.NAME = userData.NAME;
    USERDETAILSS.PHONE_NO = userData.PHONE_NO;
    USERDETAILSS.PIN = userData.PIN;
    USERDETAILSS.LOCALITY = userData.LOCALITY;
    USERDETAILSS.ADDRESS = userData.ADDRESS;
    USERDETAILSS.CITY_TOWN = userData.CITY_TOWN;
    USERDETAILSS.LANDMARK = userData.LANDMARK;
    USERDETAILSS.EMAIL = userData.EMAIL;
    USERDETAILSS.PASSWORD = userData.PASSWORD;

 
    USERDETAILSS.save()
        .then(data => {
            callback(null, data);
        })
        .catch(err => {
            callback(
                { message: "Error While Store Book Details in DataBase" },
                null
            );
        });
};


exports.find=(userData,callback)=>{
    USERDETAILS.findOne(userData)
    .then(data=>{
        callback(null,data);
    })
    .catch(err=>{
        callback({message:"error while getting book details from database"})
    })
};
