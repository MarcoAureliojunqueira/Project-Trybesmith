import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model'
import bcrypt from 'bcryptjs';
import app from '../../../src/app'; 

chai.use(chaiHttp);

describe('POST /login', function () { 
  it('verificar Usuario completo', async () => {
    const mock = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    }
  const userBuild = ProductModel.build();
   sinon.stub(ProductModel, 'create').resolves(userBuild);

   const resposta = await  chai.request(app).post('/products').send({
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4
  })

   expect(resposta.status).to.be.equal(201);
  })
  beforeEach(function () { sinon.restore(); });

});
