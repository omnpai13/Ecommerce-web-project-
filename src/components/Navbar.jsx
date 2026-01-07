import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "15px" }}>Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
