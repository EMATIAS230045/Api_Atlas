//? 
import req from "express/lib/request.js";
import productsDAO from "../dao/products.dao.js";
import res from "express/lib/response.js";

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
                "message": "erooor con la bd"
            }
        })
    });

};
productsController.getOne=(req,res)=>
{
    productsDAO.getOne(req.params.barcode)//genera una promesa
    .then((products)=>{
        if(products!==null){
            res.json({data:products})
        }
        else{
            res.json({data:{message:"Product not found"}})
        }
    })
    .catch((error)=>{
        res.json({
            data:{
                message:{error:"inconexion con el servidor"}
            }
        })
    })
}
productsController.insert=(res, req)=>{
    productsDAO.insert(req.body)
    .then((response)=>{
        res.json({
            data:{
                message: "iInsercion suceessful",
                product:response 
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })
}


export default productsController;