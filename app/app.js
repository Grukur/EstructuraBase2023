import express from "express";
import cors from 'cors';
import {create} from 'express-handlebars';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import upload from 'express-fileupload';
import morgan from 'morgan';
import viewsRoutes from './routes/view.routes.js';
import router from './routes/view.routes.js';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//handlebars
const hbs = create({
    partialsDir: [path.join(__dirname, 'views/partials')],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARES
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(upload());

//publicamos boostrap
app.use('/boostrap', express.static('./node_modules/bootstrap/dist/'));

//hacemos publica la carpeta publica
app.use('/public', express.static('public'));

//Rutas
app.use('/', viewsRoutes)


export default app;