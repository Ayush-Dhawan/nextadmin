import React from 'react'
import './singleProduct.css'
import Image from 'next/image'
import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';

export default async function page({params}) {
  const { id } = params;
  const product = await fetchProduct(id);

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
      <form action={updateProduct} className="form">
         <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
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
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
      </form>
    </div>
  </div>
  )
}
