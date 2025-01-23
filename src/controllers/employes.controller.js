//? 
import res from "express/lib/response.js";
import empleyesDAO from "../dao/employes.dao.js";
import empleyes from "../models/empleyes.js";

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
export default empleyesController;
