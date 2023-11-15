import mongoose from "mongoose";

const schema = new mongoose.Schema({
    data:{
        type:String
    },
    hobby: {
        type: Object
    }
})

export default mongoose.model.Todos || mongoose.model("Todo",schema)