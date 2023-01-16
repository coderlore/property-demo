import { type } from 'os';
import React from 'react'
import { useState, useEffect } from "react";
import {ResultType} from '../types/Result.types'

interface Props {
    result: ResultType;
}

const Result:React.FC<Props> = ({result}) => {

    return (
        <div className='result-col' key={result.id} >
            <div className='result-row' >
                <div className='resultName'>{result.name}</div>
            </div>
            <div className='result-row'>
                <div className='resultImg'><img src={result.picture} alt="Property Img"/></div>
            </div>
            <div className='result-row'>
                <div className='resultUnits'>Unit Type {result.units.map(unit => <div>{unit.type}</div>)}</div>
            </div>
            <div className='result-row'>
                <div className='resultSqft'>Average Sqft {result.units.map(unit => <div>{unit.sqft}</div>)}</div>
            </div>
            <div className='result-row'>
                <div className='resultRange'>Range {result.units.map(unit => <div>{unit.minOccupancy}-{unit.maxOccupancy} people</div>)}</div>
            </div>
        </div>
    )
}


export default Result