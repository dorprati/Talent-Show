import React, { useState } from "react";

const AddTalent = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    picture: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const talentData = { ...form };
    const event = new CustomEvent("addTalent", { detail: talentData });
    window.dispatchEvent(event);
    setForm({
      name: "",
      type: "",
      picture: null,
      video: null,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          הוסף טאלנט חדש
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            שם
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            סוג טאלנט
          </label>
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            תמונה
          </label>
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-600 border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            וידאו
          </label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-600 border border-gray-300 rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          הוסף טאלנט חדש
        </button>
      </form>
    </div>
  );
};

export default AddTalent;
