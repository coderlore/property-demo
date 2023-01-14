import React from 'react'
import { useState, useEffect } from "react";

interface Props {
    placeholder: string;
    handleFilter: any;
    setValue: any;
  }

const Filters:React.FC<Props> = ({}) => {
    return (
      <div className="filter">
        <form className='filterInputs'>
            <label htmlFor="amenitites">Choose amenity</label>
            <select name="amenity" id="amenity">
                <option value="blah">Blah 1</option>
            </select>
        </form>
      </div>
    )
  }
  
  export default Filters