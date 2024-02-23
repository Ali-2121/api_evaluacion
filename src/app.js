import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import comentsRoutes from './routes/coments.routes.js';
import productsRoutes from './routes/products.routes.js';
import path from 'path';
config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(comentsRoutes);
app.use('/products',productsRoutes);

export default app;