//? Aqui van las rutas
import {Router} from "express";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get('/getAll',productsController.getAll)


export default router; //? Se exporta para que se pueda usar en otros archivos
