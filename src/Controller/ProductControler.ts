import { Request, Response } from 'express';
import transactionsService from '../Services/produtsServices';

async function create(req: Request, res: Response) :Promise<void> {
  const { name, price, orderId } = req.body;
  const transaction = await transactionsService.Create({ name, price, orderId });
  res.status(201).json(transaction);
}

async function GetAll(req: Request, res: Response) :Promise<void> {
  const transaction = await transactionsService.getAll();
  res.status(200).json(transaction);
}
export default {
  create,
  GetAll,
};