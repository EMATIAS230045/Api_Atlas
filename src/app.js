//? Aqui va la configuración del servidor 
import express from "express";
import morgan from "morgan";
import productsRouter from './routers/products.routes.js'
import empleyesRouter from "./routers/employes.routes.js";
import customersRouter from "./routers/customers.routes.js"
import ejs from "ejs";
const app = express();

//? Settings
app.set('port',process.env.PORT || 3000);  //? si el puerto no esta en las variables de entorno se le asignara uno por default
app.set("view engine", ejs)

//?Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//? Routes
app.use('/groceries/products', productsRouter); //? Lo de comillas es un prefijo que sirve para que se diferencien las rutas y no choquen 
app.use('/groceries/empleyes', empleyesRouter); //? Lo de comillas es un prefijo que sirve para que se diferencien las rutas y no choquen 
app.use('/groceries/customers', customersRouter); //? Lo de comillas es un prefijo que sirve para que se diferencien las rutas y no choquen 
export default app; 
