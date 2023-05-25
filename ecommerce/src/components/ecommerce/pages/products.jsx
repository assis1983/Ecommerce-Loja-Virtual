import styled from "styled-components";
import { PAGINAS } from "..";
import '../../../../src/index.css'

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
  margin-top: 5%;
`

const Column = styled.div`
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`

const Product = styled.div`
  position: relative;
`

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`

const Price = styled.div`
  margin-left: 36%;
  font-size: 1rem;
  color: #313131;
  font-weight: bold;
`

// eslint-disable-next-line react/prop-types
export default function Products ({ changeScreen, products = [], qtdProductsCart, addToCart}) {
  return (
    <>
      <Menu>
        <h5>PRODUTOS</h5>
        <button className="contButton">{qtdProductsCart}</button>
      </Menu>
      <Row>
        {products.map(product => (
          <Column key={product.id}>
            <Product>
              <Image src={product.image} alt={product.title} />
                <button className="addCart" onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                
              <Price>
                R${product.price}
              </Price>
            </Product>
          </Column>
        ))}
      </Row>
        <button className="rotaCarrinho" onClick={() => changeScreen(PAGINAS.CART)}>Ir para o carrinho</button>
    </>

  )
}

