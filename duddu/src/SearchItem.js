import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
        id = 'search'
        type="text" 
        roll ='search'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}     
    />
    <input 
        id = 'search'
        type="text" 
        roll ='search'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}     
    />
    </form>
  )
}

export default SearchItem