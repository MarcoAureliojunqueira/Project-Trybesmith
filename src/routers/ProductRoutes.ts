// src/routers/transactions.router.ts

import { Router } from 'express';
import ProductControler from '../Controller/ProductControler';

const transactionsRouter = Router();

transactionsRouter.post('/products', ProductControler.create);
transactionsRouter.get('/products', ProductControler.GetAll);

export default transactionsRouter;