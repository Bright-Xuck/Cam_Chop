import { useState, useEffect, forwardRef } from "react";
import { useMerchant } from "../context/MerchantProvider";

const Additem = forwardRef(function Additem({ item, Setitem, edititem, menuid, onCancel }, ref) {
  const [tags, setTags] = useState([]);
  const { currentUser } = useMerchant();
  const merchantId = currentUser.merchantId;

  useEffect(() => {
    if (edititem) {
      document.getElementById("name").value = edititem.name;
      document.getElementById("description").value = edititem.description;
      document.getElementById("price").value = edititem.price;
      document.getElementById("category").value = edititem.category;
      document.getElementById("status").value = edititem.status;
      setTags(edititem.tags || []);
    }
  }, [edititem]);

  function addTag() {
    const newTag = document.querySelector("input[id=tag]");
    const value = newTag.value.trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      newTag.value = "";
    }
  }

  function Fetchitem(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const imageFile = formData.get("image")
    if (edititem) {
      const updatedItem = { ...edititem, ...data, image:imageFile ? URL.createObjectURL(imageFile) : edititem.image ,tags };
      Setitem(item.map((it) => (it.id === edititem.id ? updatedItem : it)));
      event.target.reset();
      setTags([]);
    } 
    else {
      const finaldata = {
        ...data,
        tags,
        id: item.length + 1,
        merchantId: merchantId,
        menuid: menuid,
        image: imageFile ? URL.createObjectURL(imageFile) : null,
      };
      Setitem([...item, finaldata]);
    }
    event.target.reset();
    setTags([]);

    console.log(item);
  }

  return (
    <div className="grid pt-20">
      <form
        ref={ref}
        action=""
        onSubmit={Fetchitem}
        className="grid grid-cols-2 w-3/4 m-auto gap-4 p-6 bg-white rounded-xl shadow-md"
      >
        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="description" className="font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows={3}
          ></textarea>
        </div>

        <div className="flex col-span-2 justify-center items-end gap-4">
          <div className="w-1/2">
            <label htmlFor="Image" className="font-semibold text-gray-700">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="border border-neutral-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="w-1/2">
            <select
              name="status"
              id="status"
              className="border border-neutral-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of stock</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-2">
          <label htmlFor="price" className="font-semibold text-gray-700">
            Price XAF:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <section className="grid grid-cols-1 rounded-md col-span-2 gap-2 border border-neutral-300 p-3">
          <label htmlFor="category" className="font-semibold text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter category"
            className="p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </section>

        <div className="grid grid-cols-2 grid-rows-[auto_auto] border border-neutral-300 rounded-md p-2 gap-2 col-span-2 h-auto">
          <div className="flex flex-wrap gap-2">
            {tags.length > 0 &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="grid grid-cols-[auto_auto] items-end gap-2 col-span-2 min-h-15">
            <p
              onClick={addTag}
              className="w-full cursor-pointer text-blue-500 hover:underline"
            >
              Add Tag
            </p>
            <input
              type="text"
              name=""
              placeholder="Add Tag"
              id="tag"
              className="border border-neutral-300 rounded-md px-1 w-full"
            />
          </div>
        </div>

        <div className="grid gap-2 col-span-2">
          <button className="border border-neutral-300 rounded-md p-3 hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button
            type="submit"
            className="border border-neutral-300 rounded-md p-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
})
export default Additem;


