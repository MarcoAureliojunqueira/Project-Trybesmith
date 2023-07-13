import OrderModel from '../database/models/order.model';
import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import { OrderTiparRetorno } from '../types/Order';

async function getAll() :Promise<OrderTiparRetorno[]> {
  const produtos = await OrderModel.findAll({
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: { exclude: ['price', 'name', 'orderId'] },
    }], 
  }); 

  const resultado = produtos.map((produto) => {
    const produt = produto.dataValues.productIds;
    console.log('ESTOU AQUI', produto);
    const retorno = {
      id: produto.dataValues.id,
      userId: produto.dataValues.userId,
      productIds: produt?.map(({ id }) => id) };
    return retorno;
  });
  return resultado as OrderTiparRetorno[];
}

async function OrderPost(productIds: number[], userId: number): 
Promise<{ type: number, message: string | { userId: number, productIds: number[] } }> {
  const usuario = await UserModel.findByPk(userId);
  console.log('--------->', userId, '<----------------');

  if (!usuario) {
    return {
      type: 404,
      message: '"userId" not found',
    };
  }
  const create = await OrderModel.create({ userId });

  Promise.all(productIds.map((id) => ProductModel.update({
    orderId: create.dataValues.id,
  }, { where: { id },
  })));
  return {
    type: 201,
    message: { userId, productIds },
  };
}

export default {
  getAll,
  OrderPost,
};