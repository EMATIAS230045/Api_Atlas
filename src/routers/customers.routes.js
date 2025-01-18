//? Aqui van las rutas
import {Router} from "express";
import customersController from "../controllers/customers.cotrollers.js";

const router = Router();

router.get('/getAll',customersController.getAll)


export default router; //? Se exporta para que se pueda usar en otros archivos
