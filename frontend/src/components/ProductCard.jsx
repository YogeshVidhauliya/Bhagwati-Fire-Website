import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <Link
        to={`/filtered-products/${product.category}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
