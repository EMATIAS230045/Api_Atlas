//? Aqui van las rutas
import {Router} from "express";
import empleyesController from "../controllers/employes.controller.js";

const router = Router();

router.get('/getAll',empleyesController.getAll)
router.get('/getOne/:empleyes_number', empleyesController.getOne)
router.put('/updateOne/:empleyes_number', empleyesController.updateOne)
router.post('/delete', empleyesController.deleteOne)


export default router; //? Se exporta para que se pueda usar en otros archivos
