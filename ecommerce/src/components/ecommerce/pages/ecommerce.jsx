import styled from "styled-components";
import { useState } from 'react';
import { PAGINAS } from '../index'
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function CartCompras ({changeScreen, cart, qtdProductsCart}) {
  const [count, setCount] = useState(1);
  // const [total, setTotal] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickDiminuir() {
    setCount(count - 1);
  }

  return ( 
      <div>
        <Menu>
          <h5>Carrinho de Compras</h5>
          <button className="contBtn">{qtdProductsCart}</button>
        </Menu>
          {cart.map(product => (
            <div className="infoCart" key={product.title}>
              <img className="imgCart" src={product.image} alt={product.title} />
              <div className="infoCompras">
                <h5>{product.title}</h5>
                <p>Valor R${product.price}</p>
                <p>Quantidade: {count} </p>
                <div className="btnqtd">
                  <button className="btnadd" onClick={handleClick}>+</button>
                  <button className="btnadd" onClick={handleClickDiminuir}>-</button>
                </div>
              </div>
            </div>
          ))}
          
          <h5>Total:</h5>
          <div className="btnFinalizar">
              <button className="btnfin"onClick={() => changeScreen(PAGINAS.CHECKOUT)}>Finalizar Compra</button>
              <button className="btnfin">Carregar dados da Compra</button>

            </div>
      </div>
    
  )
}
