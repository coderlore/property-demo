import { type } from 'os';
import React from 'react'
import {ResultType} from '../types/Result.types'

interface Props {
    result: ResultType;
}

//Declare a functional component type
const Result:React.FC<Props> = ({result}) => {
    return (
        <div className='result'>
            <div>
                {result.name}
                <img src={result.picture} />
            </div>
            <div>
                <div>Units: {result.units.map(unit => <div>{unit.type}</div>)}</div>
                <div>Average Square Footage: {result.units.map(unit => <div>{unit.sqft}</div>)}</div>
                <div>Range: {result.units.map(unit => <div>{unit.minOccupancy}-{unit.maxOccupancy} people</div>)}</div>
            </div>
        </div>
    )
}


export default Result