import express from "express";
import dotenv from "dotenv"
import connect_db from "./db_connection.js";
import router from "./path.js";


dotenv.config();
const app = express();

app.use(express.json())
app.use("/",router)
app.use("/",express.static("./template"))


connect_db().then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if (error) {
            console.log(error);
        }
        console.log("server start");
    })
})
.catch((error)=>{
    console.log(error);
})
