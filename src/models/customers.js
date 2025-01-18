import { model, Schema } from "mongoose";

const empleyesSchema = new Schema({
    empleyes_number: Number,
    brand: String,
    name: String,
    age: Number,
    lastname: String,
    gmail: String,
    salary: Number
},{
    versionKey: false,
    timestamps: true
});


export default model('customers', empleyesSchema);
