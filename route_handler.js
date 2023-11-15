import schema from "./schema/schema.js";

//data adding database
export async function add_data(req,res){
    try {
        let {todo_data} = req.body;
        let result = await schema.create({
            data:todo_data
        })
        res.status(500)
        res.json("Todo Successfully added");
        console.log("Todo Successfully added");
    } catch (error) {
        console.log(error);
    }
}

//data fetching from database
export async function get_data(req,res){
    try {
        let data = await schema.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}


//data deleting
export async function del_data(req,res){
    try {
        let {ind} = req.body;
        let d = await schema.deleteOne({_id: ind})
        res.json("data deleted")
        console.log("Todo Successfully deleted");
    } catch (error) {
        console.log(error);
    }
}

//Editing data
export async function edit_data(req,res){
    try {
        let {ind,new_data} = req.body;
                let d = await schema.updateOne({_id:ind},{data:new_data})
        res.status(201).json("Todo Successfully edited")
        console.log("Todo Successfully edited");
    } catch (error) {
        console.log(error);
    }
}