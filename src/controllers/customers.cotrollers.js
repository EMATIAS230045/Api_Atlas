//? 
import customersDAO from "../dao/customers.dao.js";

const customersController ={}; //?Este es un objeto
customersController.getAll = (req,res)=>{

    //?Aqui se piden los productos al DAO
    customersDAO.getAll()
    .then((customers)=>{
        res.json({
            data: customers
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                "message": error
            }
        })
    });

};   



export default customersController;