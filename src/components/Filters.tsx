import React from 'react'
import { useState, useEffect } from "react";
import {ResultType} from '../types/Result.types'

interface Props {
    placeholder: string;
    handleFilter: any;
    setResult: any;
    filterValueSelected:any
  }

const Filters:React.FC<Props> = ({filterValueSelected}) => {
    function onFilterValueChange(event:any){
        filterValueSelected(event.target.value)
    }
    
    return (
      <div className="filter">
        <form className='filterInputs'>
            <label htmlFor="amenitites">Choose amenity: </label>
            <select name="amenity" id="amenity" onChange={onFilterValueChange}>
                <option value="all">All</option>
                <option value="pet-friendly">pet friendly</option>
            </select>
        </form>
      </div>
    )
  }
  
  export default Filters