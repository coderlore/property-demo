import React from 'react'
import {ResultType} from '../types/Result.types'

interface Props {
    result: ResultType
}

//Declare a functional component type
const Result:React.FC<Props> = ({result}) => {
    return (
        <div className='result'>
            {result.name}
            <img src={result.picture} />
        </div>
    )
}


export default Result