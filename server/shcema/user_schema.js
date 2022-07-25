const mongoose = require("mongoose");
const arr=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
let month=arr[new Date().getMonth()];
const dateStr= `${new Date().getDate()}-${month}-${new Date().getFullYear()}`
const num=Math.floor((Math.random()*1000)+1);
// console.log(dateStr)
// const [dateComponents, timeComponents] = dateStr.split(',');
const userSchema = new mongoose.Schema({
    user_name: {
        type:String,
        required:true
    },
    user_image: {
        type:String,
        required:true
    },
    user_location: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:dateStr
    },
    likes:{
        type:Number,
        default:num
    }
});
const userModal = mongoose.model("user", userSchema);
module.exports = userModal;