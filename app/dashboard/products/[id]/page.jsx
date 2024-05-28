import React from 'react'
import './singleProduct.css'
import Image from 'next/image'

export default function page() {
  return (
    <div className="single-product-container">
    <div className="infoContainer">
      <div className="imgContainer">
        <Image src="/noavatar.png" alt="" fill />
      </div>
      {/* {product.title} */}
      Dummy Product
    </div>
    <div className="formContainer">
      <form  className="form">
        <input type="hidden" name="id"  />
        <label>Title</label>
        <input type="text" name="title"  />
        <label>Price</label>
        <input type="number" name="price"  />
        <label>Stock</label>
        <input type="number" name="stock"  />
        <label>Color</label>
        <input
          type="text"
          name="color"
          placeholder={ "color"}
        />
        <label>Size</label>
        <textarea
          type="text"
          name="size"
          placeholder={"size"}
        />
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="10"
        //   placeholder={product.desc}
        ></textarea>
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}
