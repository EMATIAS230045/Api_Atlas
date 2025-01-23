import { model, Schema } from "mongoose";

const empleyesSchema = new Schema({
    empleyes_number: Number,
    
    name: String,
    age: Number,
    lastname: String,
    gmail: String,
    salary: Number
},{
    versionKey: false,
    timestamps: true
});


export default model('empleyes', empleyesSchema);
