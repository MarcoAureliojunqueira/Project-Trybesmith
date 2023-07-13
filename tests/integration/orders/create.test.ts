import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import bcrypt from 'bcryptjs';
import app from '../../../src/app'; 
import ProductModel from '../../../src/database/models/product.model';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  it('verificar Usuario completo', async () => {
    const mock = {
      id:1,
      level:55,
      username:'xablau',
      vocation:'xablau',
      password:bcrypt.hashSync('1234', 10)
    }
  const tokenBuild = UserModel.build(mock);
   sinon.stub(UserModel, 'findOne').resolves(tokenBuild);

   const token = await  chai.request(app).post('/login').send({username: 'xablau', password: '1234'})

    const mock2= {
      id:1,
      level:55,
      username:'xablau',
      vocation:'xablau',
      password:bcrypt.hashSync('1234', 10)
    }
    const mockOrder = {
      id:1,
      userId: 1,
    }
  
    const userBuild = UserModel.build(mock2);
    sinon.stub(UserModel, 'findByPk').resolves(userBuild);

    const OrderBuild = OrderModel.build(mockOrder);
   sinon.stub(OrderModel, 'create').resolves(OrderBuild);

   sinon.stub(ProductModel, 'update').resolves();

  
   const resposta = await chai.request(app).post('/orders').set('Authorization',`beare ${token.body.token}` ).send({
    "productIds": [1, 2],
    "userId": 1
  })

   expect(resposta.status).to.be.equal(201);
  })
  beforeEach(function () { sinon.restore(); });

});
