//? 
import productsDAO from "../dao/products.dao.js";

const productsController ={}; //?Este es un objeto
productsController.getAll = (req,res)=>{

    //?Aqui se piden los productos al DAO
    productsDAO.getAll()
    .then((products)=>{
        res.json({
            data: products
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



export default productsController;