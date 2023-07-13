// src/routers/transactions.router.ts

import { Router } from 'express';
import LoginControler from '../Controller/LoginController';
import validaçãoUsername from '../middlewares/validaçãoUsername';

const transactionsRouter = Router();

transactionsRouter.post(
  '/login', 
  validaçãoUsername.validUsername,
  LoginControler.login,
);
 
export default transactionsRouter;