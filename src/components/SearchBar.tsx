import { type } from 'os';
import React from 'react'
import {ResultType} from '../types/Result.types'
import { useState, useEffect } from "react";


interface Props {
  placeholder: string;
  handleFilter: any;
  setValue: any;
}

// let data 

const SearchBar:React.FC<Props> = ({placeholder, handleFilter, setValue}) => {

  return (
    <div className="search">
      <form className='searchInputs'>
          <input type="text" placeholder={placeholder} className="searchWord" onChange={(e) => {setValue(e.target.value)}} ></input>
          <button type="button" onClick={handleFilter} className="searchBtn">Search</button>
      </form>
    </div>
  )
}

export default SearchBar