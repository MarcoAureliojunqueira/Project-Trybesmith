// src/routers/transactions.router.ts

import { Router } from 'express';
import OrdemControler from '../Controller/OrdemController';
import { validProductIds, validUserId } from '../middlewares/validacaoCadastroPedido';
import validaçãoToken from '../middlewares/validaçãoToken';

const transactionsRouter = Router();

transactionsRouter.get('/orders', OrdemControler.GetAll);
transactionsRouter.post(
  '/orders', 
  validaçãoToken.verify,
  validProductIds, 
  validUserId, 
  OrdemControler.Post,
);

export default transactionsRouter;