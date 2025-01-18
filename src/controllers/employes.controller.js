//? 
import empleyesDAO from "../dao/employes.dao.js";

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



export default empleyesController;