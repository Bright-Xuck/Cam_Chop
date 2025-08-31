import { useState } from "react";

export default function Additem() {
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [item, Setitem] = useState([])

  function add() {
    const newcategory = document.querySelector("input[name = category]");
    const value = newcategory.value.trim();
    if (value) {
      setCategory([...category, value]);
      newcategory.value = "";
    }
  }

  function addTag() {
    const newTag = document.querySelector("input[name=tag]");
    const value = newTag.value.trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      newTag.value = "";
    }
  }

  function Fetchitem(event){
    event.preventDefault()
    const formData = new FormData(event.target)
     const data = Object.fromEntries(formData)
     const finaldata ={
        ...data,
        tags
     }
     console.log(finaldata)
     Setitem([...item, finaldata])
     console.log(item)
  }

  return (
    <div className="grid pt-20">
      <form action="" onSubmit={Fetchitem} className="grid grid-cols-2 w-3/4 m-auto gap-2">
        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="border border-neutral-400 rounded-[5px] "/>
        </div>
        <div className="grid grid-cols-1 col-span-2 gap-2">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" className="border border-neutral-400 rounded-[5px]"></textarea>
        </div>
        <div className="grid grid-cols-1 col-span-2">
          <label htmlFor="Image">Image</label>
          <input type="file" id="Image" name="Image" className="border border-neutral-400 rounded-[5px]"/>
        </div>
         <div className="grid grid-cols-1 grid-rows-2 col-span-2">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" className="border border-neutral-400 rounded-[5px] before:content-['XAF']"/>
        </div>
        <section className="grid grid-cols-1 rounded-[5px] col-span-2">
          <label>Category</label>
          <div>
            {category.length < 1 && (
              <>
                <p>No Category yet</p>
                <div className="flex justify-between border border-neutral-400 rounded-[5px]">
                  <p onClick={add} className="order-2 text-blue-400 cursor-pointer w-1/2 text-center bg-blue-100 rounded-l-2xl hover:bg-blue-700 hover:text-white">Add Category</p>{" "}
                  <input
                    type="text"
                    name="category"
                    id=""
                    placeholder="Add Category"
                  />{" "}
                </div>
              </>
            )}
            {category.length > 0 && (
              <div>
                {category.map((each, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name="radiocategory"
                      value={each}
                      id={`each-${index}`}
                    />
                    <label htmlFor={`each-${index}`}>{each}</label>
                  </div>
                ))}
                <div className="flex gap-2 mt-2">
                  <p onClick={add} className="cursor-pointer text-blue-600">
                    Add Category
                  </p>
                  <input
                    type="text"
                    name="category"
                    placeholder="Add Category"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
        <div className="grid grid-cols-1 border border-neutral-400 rounded-[5px]">
            <div className="flex">
          <label htmlFor="tags">Tags:</label>
          <div className="flex flex-wrap">
            {tags.length > 0 &&
              tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded mx-1">
                  {tag}
                </span>
              ))}
          </div>
          </div>
           <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-baseline">
              <p onClick={addTag} className="cursor-pointer text-blue-600">
                Add Tag
              </p>
              <input type="text" name="tag" placeholder="Add Tag" id="tags" className="h-full"/>
            </div>
        </div>
        <div className="grid gap-2">
            <button className="border border-neutral-400 rounded-[5px] p-3">Cancel</button>
            <button className="border border-neutral-400 rounded-[5px] p-3" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

