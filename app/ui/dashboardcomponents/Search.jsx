"use client"
import React from 'react'
import './Search.css'
import { MdSearch } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function Search({placeholder}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleChange = useDebouncedCallback((e) =>{
    const params = new URLSearchParams(searchParams);
    if(e.target.value){
      params.set("q", e.target.value);
    }else{
      params.delete("q");
    }
  
    replace(`${pathname}?${params}`)
  }, 1000)


  return (
    <div className='search-container'>
        <MdSearch />
        <input type='text' placeholder={placeholder} className='input' onChange={(e) => handleChange(e)} />
    </div>

  )
}
