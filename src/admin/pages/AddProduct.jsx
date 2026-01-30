import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    category: "",
    image: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5003/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/admin/products");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      <form onSubmit={submitHandler} className="space-y-4 max-w-md">
        <input name="name" placeholder="Name" onChange={changeHandler} className="border p-2 w-full" />
        <input name="description" placeholder="Description" onChange={changeHandler} className="border p-2 w-full" />
        <input name="price" type="number" placeholder="Price" onChange={changeHandler} className="border p-2 w-full" />
        <input name="countInStock" type="number" placeholder="Stock" onChange={changeHandler} className="border p-2 w-full" />
        <input name="category" placeholder="Category" onChange={changeHandler} className="border p-2 w-full" />
        <input name="image" placeholder="Image URL" onChange={changeHandler} className="border p-2 w-full" />

        <button className="bg-black text-white px-4 py-2">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
