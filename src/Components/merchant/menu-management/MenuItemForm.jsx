import { useState, forwardRef } from "react";

const Additem = forwardRef(function Additem({ menuid }, ref) {
  // Controlled local form state for presentation-only form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  function addTag(e) {
    e.preventDefault();
    const v = tagInput.trim();
    if (v && !tags.includes(v)) {
      setTags((s) => [...s, v]);
      setTagInput("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: no real data handling here
    console.log("Menu item submit (placeholder)", { menuid, name, description, price, category, inStock, tags });
    // reset local form
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
    setInStock(true);
    setTags([]);
    setTagInput("");
  }

  return (
    <div className="grid pt-20">
      <form ref={ref} onSubmit={handleSubmit} className="grid grid-cols-2 w-3/4 m-auto gap-4 p-6 bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="description" className="font-semibold text-gray-700">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" rows={3} />
        </div>

        <div className="flex col-span-2 justify-center items-end gap-4">
          <div className="w-1/2">
            <label htmlFor="Image" className="font-semibold text-gray-700">Image</label>
            <input type="file" id="image" name="image" className="border border-neutral-300 rounded-md p-2 w-full" disabled />
          </div>
          <div className="w-1/2">
            <select value={inStock ? "In Stock" : "Out of Stock"} onChange={(e) => setInStock(e.target.value === "In Stock")} name="status" id="status" className="border border-neutral-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-2">
          <label htmlFor="price" className="font-semibold text-gray-700">Price XAF:</label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" id="price" name="price" className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>

        <section className="grid grid-cols-1 rounded-md col-span-2 gap-2 border border-neutral-300 p-3">
          <label htmlFor="category" className="font-semibold text-gray-700">Category</label>
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" id="category" name="category" placeholder="Enter category" className="p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </section>

        <div className="grid grid-cols-2 grid-rows-[auto_auto] border border-neutral-300 rounded-md p-2 gap-2 col-span-2 h-auto">
          <div className="flex flex-wrap gap-2">
            {tags.length > 0 && tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{tag}</span>
            ))}
          </div>
          <div className="grid grid-cols-[auto_auto] items-end gap-2 col-span-2 min-h-10">
            <button onClick={addTag} className="w-full cursor-pointer text-blue-500 hover:underline">Add Tag</button>
            <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} type="text" placeholder="Add Tag" id="tag" className="border border-neutral-300 rounded-md px-1 w-full" />
          </div>
        </div>

        <div className="grid gap-2 col-span-2">
          <button type="button" className="border border-neutral-300 rounded-md p-3 hover:bg-gray-100 transition-colors" onClick={() => { setName(""); setDescription(""); setPrice(""); setCategory(""); setInStock(true); setTags([]); setTagInput(""); }}>Cancel</button>
          <button type="submit" className="border border-neutral-300 rounded-md p-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors">Save</button>
        </div>
      </form>
    </div>
  );
});

export default Additem;


