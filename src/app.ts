import express from 'express';
import Routas from './routers/ProductRoutes';

const app = express();

app.use(express.json());
app.use(Routas);

export default app;
