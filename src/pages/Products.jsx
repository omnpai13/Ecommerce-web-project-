import { products } from "../data/products";

export default function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}