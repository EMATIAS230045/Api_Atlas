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
    // res.render('../src/views/index.ejs')
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
productsController.insert=(req, res)=> {
    productsDAO.insert(req.body)
    .then((response)=> {
        // res.json({
        //     data:{
        //         message: "iInsercion suceessful",
        //         product:response 
        //     }
        // })
        res.redirect('/groceries/products/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    })
}
productsController.updateOne=(req,res)=>{
    productsDAO.updateOne(req.body,req.params.barcode)
    .then((result)=>{
        res.json({
        data:{
            menssage:"Product update sucessfully",
            result:result
        }

        })
    })
    .catch((erooor)=>{
        res.json({
            data:{error:error}
        })
       }) 
}
productsController.deleteOne=(req, res) =>{
   productsDAO.deleteOne(req.params.barcode)
   .then((productDeleted)=>{
    res.json({
        data:{
            menssage:"Product deleste sucessfully",
            productDeleted:productDeleted
        }
    })
   })
   .catch((productDeleted)=>{
    res.json({
        data:{
            error:productDeleted
        }
    })    
   }) 
}

export default productsController;
