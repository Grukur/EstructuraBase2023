import { goHome } from '../controllers/view.controllers.js';
import { Router } from 'express';

const router = Router();

//Rutas
router.get('/', goHome);

export default router