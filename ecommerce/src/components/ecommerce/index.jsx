import Layout from "./layout";
import { Products, Checkout, Ecommerce as EcommercePage  } from './pages'
import { products as p } from "./utils/products";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PAGINAS = {
  PRODUCTS: 0,
  CART: 1,
  CHECKOUT: 2
}

export default function Ecommerce () {
  const [screen, setScreen] = useState(PAGINAS.PRODUCTS)
  const [products, setProducts] = useState(p)
  const [cart, setCart] = useState([])

  // eslint-disable-next-line no-unused-vars
  const excluirDoCarrinho = (identificador) => {
    setProducts(products.filter(item => item.id !== identificador))
  }

  const addCart = (product) => {
    const productsExistentes = cart.find(produto => produto.id === product.id)

    if (productsExistentes)
    return
    setCart([...cart, {
      ...product, qtd: 1
    }])  
  }
  
  return (
    <Layout>
      {screen === PAGINAS.PRODUCTS && (
        <Products
          products={products}
          qtdProductsCart={cart.length}
          addToCart={addCart}
          changeScreen={setScreen}
        />
      )}
      
      {screen === PAGINAS.CART && (
        <EcommercePage
          changeScreen={setScreen}
          cart={cart}
          qtdProductsCart={cart.length}
        />
      )}

      {screen === PAGINAS.CHECKOUT && (
        <Checkout
          changeScreen={setScreen}
          cart={cart}
        />
      )}
    </Layout>
  )
  
}

