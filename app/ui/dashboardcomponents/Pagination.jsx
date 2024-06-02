"use client"
import React from 'react'
import './Pagination.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({count}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || 1;
  const ITEMS_PER_PAGE = 2;

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

  function handleChangePage(type){
    type === "prev"
    ? params.set("page", parseInt(page) - 1)
    : params.set("page", parseInt(page) + 1);

    replace(`${pathname}?${params}`)
  }
  return (
    <div className='pagination-container'>
        <button className="paginationbtn" disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Prev</button>
        <button className="paginationbtn" disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
    </div>
  )
}
