import { type } from 'os';
import React from 'react'
import { useState, useEffect } from "react";
import {ResultType} from '../types/Result.types'

interface Props {
    result: ResultType;
}

//Declare a functional component type
const Result:React.FC<Props> = ({result}) => {
    // const [filteredData, setFilteredData] = useState([]);
    // const [wordEntered, setWordEntered] = useState("");
    // const handleFilter = (event:any) => {
    //     const searchWord = event.target.value;
    //     setWordEntered(searchWord);
    //     let filterName = new Array(result)
    //     const newFilter = filterName.filter((value) => {
    //       return value.name.toLowerCase().includes(searchWord.toLowerCase());
    //     });
    //     console.log(filterName)
    // }

    return (
        <div className='result' >
            {/* <div className="search">
                <form className='searchInputs'>
                    <input type="text" placeholder={placeholder} className="searchWord" onChange={handleFilter}></input>
                    <button type="submit">Search</button>
                </form>
            </div> */}
            <div className='resultName'>
                {result.name}
            </div>
            <div className='resultImg'>
                <img src={result.picture} />
            </div>
            <div className='resultUnits'>Unit Type {result.units.map(unit => <div>{unit.type}</div>)}</div>
            <div className='resultSqft'>Average Square Footage {result.units.map(unit => <div>{unit.sqft}</div>)}</div>
            <div className='resultRange'>Range {result.units.map(unit => <div>{unit.minOccupancy}-{unit.maxOccupancy} people</div>)}</div>
        </div>
    )
}


export default Result