//? Aqui van las rutas
import {Router} from "express";
import empleyesController from "../controllers/employes.controller.js";

const router = Router();

router.get('/getAll',empleyesController.getAll)
router.get('/getOne/:empleyes_number', empleyesController.getOne)


export default router; //? Se exporta para que se pueda usar en otros archivos
