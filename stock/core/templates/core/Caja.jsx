import { useState } from 'react';
import ProductItem from './Cajaproductos';
import '../assets/styles/caja.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false); // Nuevo estado para los métodos de pago

  const addProduct = () => {
    setCartItems([...cartItems, { id: Date.now(), name: '', price: 0, quantity: 1 }]);
  };

  const removeProduct = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setCartItems(cartItems.map(item => (item.id === id ? updatedProduct : item)));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePaymentClick = () => {
    setShowPaymentMethods(true); // Mostrar métodos de pago al hacer clic en "Pagar"
  };

  const handlePaymentMethod = (method) => {
    alert(`Has seleccionado ${method}`); // Muestra la selección del método de pago
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      
      {cartItems.map(item => (
        <ProductItem 
          key={item.id} 
          product={item} 
          onUpdate={updateProduct} 
          onRemove={() => removeProduct(item.id)} 
        />
      ))}

      <button onClick={addProduct} className="add-product-btn">Agregar Producto</button>

      <div className="cart-total">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      <button className="pay-button" onClick={handlePaymentClick}>
        Pagar: ${total}
      </button>

      {/* Condicional para mostrar los botones de métodos de pago */}
      {showPaymentMethods && (
        <div className="payment-methods">
          <h3>Métodos de Pago</h3>
          <button onClick={() => handlePaymentMethod('Efectivo')} className="payment-btn">Efectivo</button>
          <button onClick={() => handlePaymentMethod('Débito')} className="payment-btn">Débito</button>
          <button onClick={() => handlePaymentMethod('Crédito')} className="payment-btn">Crédito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
