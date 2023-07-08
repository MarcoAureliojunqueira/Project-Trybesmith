import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { NewProduct, Product } from '../types/Product';

async function Create(produto: NewProduct) :Promise<Product> {
  const create = await ProductModel.create(produto);
  return create.dataValues; 
}

async function getAll() :Promise<ProductSequelizeModel[]> {
  const produtos = await ProductModel.findAll(); 
  return produtos;
}

export default {
  Create,
  getAll,
};