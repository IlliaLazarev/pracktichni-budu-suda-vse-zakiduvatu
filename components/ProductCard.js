function ProductCard({ product, increase, decrease }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Ціна: {product.price} грн</p>
      <p>Кількість: {product.count}</p>

      <button onClick={() => decrease(product.id)}>-</button>
      <button onClick={() => increase(product.id)}>+</button>
    </div>
  );
}

export default ProductCard;