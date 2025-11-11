import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [form, setForm] = useState({ name: "", image: "", price: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic validation
    if (!form.name.trim() || !form.image.trim() || form.price === "") {
      alert("Please fill in name, image and price");
      return;
    }

    const priceNumber = Number(form.price);
    if (Number.isNaN(priceNumber)) {
      alert("Price must be a number");
      return;
    }

    // Prepare payload
    const payload = {
      name: form.name.trim(),
      image: form.image.trim(),
      price: priceNumber,
    };

    // Call parent handler
    if (onAddPlant) onAddPlant(payload);

    // Reset form
    setForm({ name: "", image: "", price: "" });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          value={form.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          value={form.price}
          onChange={handleChange}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
