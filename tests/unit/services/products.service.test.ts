import { expect } from 'chai';
import sinon from 'sinon';
import ProductService from '../../../src/Services/produtsServices'
import ModelProduct from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  it('Testando se foi possivel criar um novo Produto', async function () {
    // Arrumar 
    // Agir 
    // Verificar
    const bancoDeDados = {
      id: 6 ,
      name: 'test',
      price: '4',
      orderId: 7,
    }
    const test = {
      name: 'test',
      price: '4',
      orderId: 7,
    }
  const resultBanco = ModelProduct.build(bancoDeDados)
     sinon.stub(ModelProduct, 'create').resolves(resultBanco)
   const product = await ProductService.Create(test)
   expect(product).to.be.a('object')
   expect(product).to.be.deep.equal({ id: 6,
    name:'test', price: '4', orderId: 7})
   

  })
  beforeEach(function () { sinon.restore(); });
  


});
