import { type } from 'os';
import React from 'react'
import {ResultType} from '../types/Result.types'
import { useState, useEffect } from "react";


interface Props {
  // result: ResultType;
  placeholder: string;
}

let data 

const SearchBar:React.FC<Props> = ({placeholder}) => {
  const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  const [value, setValue] = useState("")
  const handleFilter = async (event:any) => {
    // const searchWord = value;
    // setWordEntered(searchWord);
    const res = await fetch(`http://localhost:8000/listing?name=${value}`)
    data = await res.json()
    console.log(data)
    // const newFilter = data.filter((value:any) => {
      // return value.name.toLowerCase().includes(searchWord.toLowerCase());
    // });
  }
  

  return (
    <div className="search">
      <form className='searchInputs'>
          <input type="text" placeholder={placeholder} className="searchWord" onChange={(e) => {setValue(e.target.value)}} ></input>
          <button type="button" onClick={handleFilter}>Search</button>
      </form>
    </div>
  )
}

export default SearchBar

// export {
//   SearchBar,
//   data,
// }