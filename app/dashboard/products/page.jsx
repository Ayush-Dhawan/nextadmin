import React from 'react'
import '../../ui/userscomponents/users.css'
import Search from '@/app/ui/dashboardcomponents/Search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboardcomponents/Pagination'
import { getAllProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'
// import {searchParams} from 'next/navigation'

export default async function page({searchParams}) {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {products, count} = await getAllProducts(query, page);
  console.log(products, "prods", count)
  return (
    <div className='users-container'>
      <div className="top">
          <Search placeholder={"search products.."} />
          <Link href={'/dashboard/products/add'}>
              <button className='add-btn'>Add new</button>
          </Link>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
         {products?.map(product => (
           <tr key={product.id}>
           <td>
             <div className="user">
               <Image
                 src={product.img || '/noproduct.jpg'}
                 alt=''
                 height={40}
                 width={40}
                 className='user-image'
                  />
                  {product.title}
             </div>
           </td>
           <td>{product.desc}</td>
           <td>{product.price}</td>
           <td>{product.createdAt?.toString().slice(4, 16)}</td>
           <td>{product.stock}</td>
           <td>
             <div className="buttons">
                 <Link href={`/dashboard/products/${product.id}`}>
                   <button className={`${"button"} ${"view"}`}>View</button>
                 </Link>
                   <form action={deleteProduct}>
                      <input type="hidden" name='id' value={product.id} />
                      <button className={`${"button"} ${"del"}`}>Delete</button>
                   </form>
             </div>
           </td>
         </tr>
         ))}
        </tbody>
      </table>
        <Pagination count={count} />  
    </div>
  )
}


