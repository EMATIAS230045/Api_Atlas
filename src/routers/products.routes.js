//? Aqui van las rutas
import {Router} from "express";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get('/getAll',productsController.getAll);
router.get('/getOne/:barcode', productsController.getOne);
router.post('/insert', productsController.insert);
router.post('/delete/:barcode', productsController.deleteOne);
router.put('/updateOne/:barcode', productsController.updateOne);
export default router; //? Se exporta para que se pueda usar en otros archivos
