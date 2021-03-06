const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const Arm_controller = require("./controller/Arm_controller");
const {register, login}=require("./controller/authentication.controller");

const app = express();

require("dotenv").config()
// const connect =()=>{
//     return mongoose.connect("mongodb+srv://unnati:12345@cluster0.ft1wj.mongodb.net/test")
// }
app.use(express.json());
const corsOrigin = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOrigin));

app.use("/armschair", Arm_controller);
// app.use("/armschair/:id", Arm_controller);
app.post("/register", register); 
app.post("/login", login);

port = process.env.PORT || 3000;

app.listen(port,()=>{
    try{
        connect();
        console.log(`listing to ${port}`)
    }catch(e){
        console.error({message:e.message})
    }
})