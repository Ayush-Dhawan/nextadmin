import React from 'react'
import './Search.css'
import { MdSearch } from 'react-icons/md'

export default function Search({placeholder}) {
  return (
    <div className='search-container'>
        <MdSearch />
        <input type='text' placeholder={placeholder} className='input' />
    </div>

  )
}
