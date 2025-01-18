//? Aqui van las rutas
import {Router} from "express";
import empleyesController from "../controllers/employes.controller.js";

const router = Router();

router.get('/getAll',empleyesController.getAll)


export default router; //? Se exporta para que se pueda usar en otros archivos
