/* eslint-disable react/prop-types */
export default function Checkout ({cart}) {
    return (
      <div>
            <h5>
              Produtos Escolhidos
            </h5>

            {/* // eslint-disable-next-line react/prop-types */}
            {cart.map(product => (
              <div className="teste" key={product.title}>
                <img className="imgCart" src={product.image} alt={product.title}/>
              </div>
            ))}

      </div>
    )
  }