function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <p>Категорія: {category}</p>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default ProductCard;
