import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
