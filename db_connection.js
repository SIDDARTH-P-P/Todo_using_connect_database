import mongoose from "mongoose";

export default function connect_db(){
    return mongoose.connect(process.env.BD_URL );
}