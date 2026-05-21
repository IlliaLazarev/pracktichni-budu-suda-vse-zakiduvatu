import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <ProductCard
          title="Ноутбук"
          price="35000"
          category="Техніка"
        />

        <ProductCard
          title="Навушники"
          price="2500"
          category="Аксесуари"
        />

        <ProductCard
          title="Смартфон"
          price="18000"
          category="Техніка"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
