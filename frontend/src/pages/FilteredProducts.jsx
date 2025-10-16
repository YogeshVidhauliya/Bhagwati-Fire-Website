import { useParams } from "react-router-dom";
import products from "../data/products";

function FilteredProducts() {
  const { category } = useParams();

  // Filter products by clicked category
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="page">
      <h1>Products : {category}</h1>
      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default FilteredProducts;
