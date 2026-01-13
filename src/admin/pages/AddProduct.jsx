const AddProduct = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      <div className="space-y-4 max-w-md">
        <input className="w-full border p-2" placeholder="Product Name" />
        <input className="w-full border p-2" placeholder="Price" />
        <input className="w-full border p-2" placeholder="Image URL" />

        <button className="bg-black text-white px-4 py-2">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
