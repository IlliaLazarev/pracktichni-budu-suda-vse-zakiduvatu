import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartSummary from "./components/CartSummary";

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Ноутбук", price: 35000, count: 0 },
    { id: 2, title: "Мишка", price: 500, count: 0 },
    { id: 3, title: "Клавіатура", price: 1200, count: 0 }
  ]);

  const increase = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, count: product.count + 1 }
        : product
    ));
  };

  const decrease = (id) => {
    setProducts(products.map(product =>
      product.id === id && product.count > 0
        ? { ...product, count: product.count - 1 }
        : product
    ));
  };

  useEffect(() => {
    console.log("Кошик змінився");
  }, [products]);

  return (
    <div>
      <Header />

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          increase={increase}
          decrease={decrease}
        />
      ))}

      <CartSummary products={products} />
    </div>
  );
}

export default App;