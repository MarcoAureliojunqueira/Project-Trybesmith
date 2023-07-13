import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import userModel from '../../../src/database/models/user.model'
import bcrypt from 'bcryptjs';
import app from '../../../src/app'; 

chai.use(chaiHttp);

describe('POST /login', function () { 
  it('verificar Usuario completo', async () => {
    const mock = {
      id:1,
      level:55,
      username:'xablau',
      vocation:'xablau',
      password:bcrypt.hashSync('1234', 10)
    }
  const userBuild = userModel.build(mock);
   sinon.stub(userModel, 'findOne').resolves(userBuild);

   const resposta = await  chai.request(app).post('/login').send({username: 'xablau', password: '1234'})

   expect(resposta.status).to.be.equal(200);
  })
  beforeEach(function () { sinon.restore(); });

});
