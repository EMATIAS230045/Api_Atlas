//? 
import req from "express/lib/request.js";
import customersDAO from "../dao/customers.dao.js";
import res from "express/lib/response.js";
import customers from "../models/customers.js";

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

customersController.getOne = (req, res) =>{
    customersDAO.getOne(req.params.customer_number)
    .then((customers)=>{
        if(customer_number!==null){
            res.json({
                message:customers
            })
        }
        else{
            res.json({
                message:"Customer not found"
            })
        }
    }).catch((error)=> {
        res.json({
            message:"Conetion db not sucesful"
        })
    })
}



export default customersController;