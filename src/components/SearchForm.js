import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setInput}= useGlobalContext()
  return (
    <section className="section search">
      <form onSubmit={(e)=>{
        e.preventDefault();
        
      }} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input onChange={(e)=>{
            const value= e.target.value;
            setInput(value);
          }} type="text" className="name" />
        </div>

      </form>
    </section>)
}

export default SearchForm
