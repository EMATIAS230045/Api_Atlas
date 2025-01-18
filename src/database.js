//? Aqui va la conexión a la BD de MongoDB

import mongoose  from "mongoose";

mongoose.connect('mongodb+srv://230045:4lhgs5LtmKyByHvR@cluster0.otxog.mongodb.net/groceries_db?retryWrites=true&w=majority&appName=Cluster0')
.then((db)=>console.log('MongoDB Atlas Connected'))
.catch((error)=>console.error(error));







export default mongoose;