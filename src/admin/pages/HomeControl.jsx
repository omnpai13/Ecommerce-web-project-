import { useState } from "react";
import axios from "axios";

const HomeControl = () => {
  const [heroImage, setHeroImage] = useState(null);

  const [edits, setEdits] = useState([
    { image: null, title: "" },
    { image: null, title: "" },
    { image: null, title: "" },
  ]);

  const token = localStorage.getItem("token");

  // ===== Upload helper =====
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      "http://localhost:5000/api/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.imageUrl;
  };

  // ===== Handle edit change =====
  const handleEditChange = (index, field, value) => {
    const updatedEdits = [...edits];
    updatedEdits[index][field] = value;
    setEdits(updatedEdits);
  };

  // ===== Save Home Page =====
  const saveHomePage = async () => {
    try {
      const heroUrl = heroImage ? await uploadImage(heroImage) : "";

      const editsData = await Promise.all(
        edits.map(async (item) => ({
          title: item.title,
          image: item.image ? await uploadImage(item.image) : "",
        }))
      );

      await axios.put(
        "http://localhost:5000/api/home",
        {
          heroImage: heroUrl,
          edits: editsData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Home page updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating home page");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Home Control</h1>

      {/* ===== HERO IMAGE ===== */}
      <div className="mb-8">
        <h2 className="font-medium mb-2">Hero Banner</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setHeroImage(e.target.files[0])}
        />
      </div>

      {/* ===== SHOP OUR EDITS ===== */}
      <div className="mb-8">
        <h2 className="font-medium mb-4">Shop Our Edits</h2>

        {edits.map((item, index) => (
          <div key={index} className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleEditChange(index, "image", e.target.files[0])
              }
            />

            <input
              type="text"
              placeholder="Title"
              value={item.title}
              onChange={(e) =>
                handleEditChange(index, "title", e.target.value)
              }
              className="border p-2 ml-2"
            />
          </div>
        ))}
      </div>

      <button
        onClick={saveHomePage}
        className="bg-black text-white px-6 py-2"
      >
        Save Home Page
      </button>
    </div>
  );
};

export default HomeControl;
