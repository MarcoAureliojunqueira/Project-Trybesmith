import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductServices from '../../../src/Services/produtsServices'
import ProductController from '../../../src/Controller/ProductControler'

chai.use(sinonChai);

describe('ProductsController', async function () {
  const req = {
    body: {
      name: 'test',
      price: '4',
      orderId: 7,
    }
  } as Request;
  const res = { 
  } as Response;
 res.status = sinon.stub().returns(res)
 res.json = sinon.stub().returns(res)

  const test = {
    id: 6 ,
    name: 'test',
    price: '4',
    orderId: 7,
  }
  sinon.stub(ProductServices , 'Create').resolves(test)
  await ProductController.create(req , res)
 expect(res.status).to.be.calledWith(201)
 expect(res.json).to.be.deep.equal({ id: 6,
  name:'test', price: '4', orderId: 7})
 

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

});
