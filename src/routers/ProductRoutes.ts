// src/routers/transactions.router.ts

import { Router } from 'express';
import ProductControler from '../Controller/ProductControler';
import { validPrice, validUsername } from '../middlewares/validaçaõProdutos';

const transactionsRouter = Router();

transactionsRouter.post(
  '/products', 
  validPrice, 
  validUsername,
  ProductControler.create,
);
transactionsRouter.get('/products', ProductControler.GetAll);

export default transactionsRouter;