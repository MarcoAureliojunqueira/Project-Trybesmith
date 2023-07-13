import { Request, Response } from 'express';
import ordemServe from '../Services/OrderServices';

async function GetAll(req: Request, res: Response) :Promise<void> {
  const transaction = await ordemServe.getAll();
  res.status(200).json(transaction);
}
// {
// message: transaction.message }
async function Post(req: Request, res: Response) :Promise<void> {
  const { userId, productIds } = req.body;
  const transaction = await ordemServe.OrderPost(productIds, userId);
  res.status(transaction.type).json(
    typeof transaction.message === 'string' ? { message: transaction.message } 
      : transaction.message,
  );
}
export default {
  GetAll,
  Post,
};