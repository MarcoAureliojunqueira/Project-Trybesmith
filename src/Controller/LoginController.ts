// src/controllers/login.controller.ts

import { Request, Response } from 'express';
import loginService from '../Services/LoginService';
import validaçãoToken from '../middlewares/validaçãoToken';
// import * as tokenCreate from '../middlewares/validaçãoToken';

async function login(req: Request, res: Response):Promise<void> {
  try {
    const { username, password } = req.body;
    const usuario = await loginService.Loginpost({ username, password });

    const Token = validaçãoToken.tokenCreate({ username, id: usuario.dataValues.id });
    res.status(200).json({ token: Token });
  } catch (error) {
    res.status(401).json({ message: 'Username or password invalid' });
  }
}

export default {
  login,
};