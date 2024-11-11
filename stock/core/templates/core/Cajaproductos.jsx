import { useState } from 'react';

const ProductItem = ({ product, onUpdate, onRemove }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleNameChange = (e) => {
    setName(e.target.value);
    onUpdate(product.id, { ...product, name: e.target.value });
  };

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    setPrice(newPrice);
    onUpdate(product.id, { ...product, price: newPrice });
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdate(product.id, { ...product, quantity: newQuantity });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdate(product.id, { ...product, quantity: newQuantity });
    }
  };

  return (
    <div className="cart-item">
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={name} 
        onChange={handleNameChange} 
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={price || ''} 
        onChange={handlePriceChange} 
      />
      <div className="quantity-control">
        <button onClick={decreaseQuantity} className="quantity-btn">-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity} className="quantity-btn">+</button>
      </div>

      <button onClick={onRemove} className="remove-btn">Eliminar</button>
    </div>
  );
};

export default ProductItem;
