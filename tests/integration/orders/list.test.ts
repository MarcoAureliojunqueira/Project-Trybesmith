import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from 'bcryptjs';
import app from '../../../src/app'; 
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  it('verificar Usuario completo', async () => {
   
  const ProductBuild = ProductModel.build({id: 1, name: 'xablau', price: '2 xablau', orderId: 1} ) as any;

  const userBuild = OrderModel.build({ "id": 1, 
  "userId": 1, 
  "productIds": [ ProductBuild ] });
   sinon.stub(OrderModel, 'findAll').resolves([userBuild]);

   const resposta = await  chai.request(app).get('/orders').send()

   expect(resposta.status).to.be.equal(200);
  })
  
  beforeEach(function () { sinon.restore(); });

});
