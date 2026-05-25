function CartSummary({ products }) {
  const totalCount = products.reduce((sum, product) => sum + product.count, 0);

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.count,
    0
  );

  return (
    <div>
      <h2>Підсумок кошика</h2>
      <p>Загальна кількість товарів: {totalCount}</p>
      <p>Загальна сума: {totalPrice} грн</p>
    </div>
  );
}

export default CartSummary;