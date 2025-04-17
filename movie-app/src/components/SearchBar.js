import React from 'react';

const SearchBar = ({
    query, setQuery, handleSearch

}) =>{
    return(
        <div className='search-bar'>
       <input
       type='text' value={query}
       placeholder='Search for movies....'
       onChange={(e) => setQuery(e.target.value)}
/>
      <button onClick={handleSearch}>Search</button>
        </div>
    )
}
export default SearchBar;