

import React from 'react'

interface SearchBarProps {
    onSearch: (searchTerm: string) => void
}

const SearchBar = ({onSearch}:SearchBarProps) => {
  return (
    <div className='mb-4 md:w-3/4'>
      <h3 className='font-bold text-lg mb-2'> Search News </h3>
      <input type="text" placeholder='Search news...' 
      onChange={(e) => onSearch(e.target.value)}
      className='p-2 border rounded-md w-full' />
    </div>
  )
}

export default SearchBar
