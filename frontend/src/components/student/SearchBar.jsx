import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Searchbar = ({data}) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate("/course-list/" + input)
  }

  return (
    
      <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center justify-between bg-white rounded-full shadow-md border border-gray-500/20'>
        <img src={assets.search_icon} alt='search-icon' className='md:w-auto w-10 px-3' />
        <input 
        onChange={(e )=> setInput(e.target.value)} value={input} type="text" placeholder='Search for courses, instructors, or topics' className='w-full h-full outline-none text-gray-500/80' />
        <button type='submit' className='bg-blue-600 text-white px-7 md:px-10 py-2 mx-1 rounded-full'>Search</button>
      </form>
  )
}

export default Searchbar