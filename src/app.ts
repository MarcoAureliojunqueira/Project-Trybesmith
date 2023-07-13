import express from 'express';
import Routas from './routers/ProductRoutes';
import RoutasOrdem from './routers/OrdemRoutes';
import Login from './routers/LoginRoutes';

const app = express();

app.use(express.json());
app.use(Routas);
app.use(RoutasOrdem);
app.use(Login);

export default app;
