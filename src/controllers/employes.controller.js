//? 
import res from "express/lib/response.js";
import empleyesDAO from "../dao/employes.dao.js";
import empleyes from "../models/empleyes.js";
import req from "express/lib/request.js";

const empleyesController ={}; //?Este es un objeto
empleyesController.getAll = (req,res)=>{

    //?Aqui se piden los productos al DAO
    empleyesDAO.getAll()
    .then((empleyes)=>{
        res.json({
            data: empleyes
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

empleyesController.getOne = (req, res) =>{
empleyesDAO.getOne(req.params.empleyes_number)
.then((empleyes)=>{
if(empleyes!==null){
    res.json({
        message:{
            data: empleyes
        }
    })
}
else{
    res.json({
        message:{
            data: "employes not found"
        }
    })
}
})
.catch((error)=>{
    res.json({
        message:{
            "error":"conetion no sucesful"
        }
    })
})

}
empleyesController.deleteOne = (req, res) =>{
    empleyesDAO.deleteOne(req.params.empleyes_number)
    .then((result)=>{
        res.json({
            data:"Empleyes delete sucessfull",
            result:result
        })
    })
    .catch((error)=>{
        res.json({
            data:"Delete no sucessfull",
            error:error
        })
    })

}
empleyesController.updateOne = (req, res) =>{
empleyesDAO.updateOne(req.params.empleyes_number)
.then((empleyes_UP)=> {
    res.json({
        message:"Actualitation Sucessfull",
        result:empleyes_UP
    }
    )
})
.catch((error)=>{
    res.json({
        message:error,
        error:error
    })
})
}
export default empleyesController;
