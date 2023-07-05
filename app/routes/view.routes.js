import { goHome } from '../controllers/view.controllers.js';
import { Router } from 'express';
import {findAllProductos, addProductos} from '../controllers/productos.controller.js'
import upload from '../middlewares/upload.middleware.js'; //middleware

const router = Router();

//Rutas base
router.get('/', goHome);
router.get('/productos', goHome);

//Rutas Productos
router.get("/", findAllProductos)
router.post('/', upload, addProductos)

export default router