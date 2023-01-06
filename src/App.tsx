import React from 'react';
import ReactPaginate from 'react-paginate'
import './App.css';
import Header from './components/Header'
import { useState, useEffect } from "react";
import { json } from 'stream/consumers';
import Loader from './components/Loader'
import Result from './components/Result'
import SearchBar from './components/SearchBar'

type resultProps = {
  id: any;
  name: String;
  picture: any;
  units: any;
}

function App() {
  const [results, setResult] = useState<resultProps[]>([])
  const [error, setError] = useState({})
  const [pageCount, setpageCount] = useState(0)

  const listingPerPage:number = 10
  const pagesVisited = pageCount * listingPerPage

  const displayListings = results
    .slice(pagesVisited, pagesVisited + listingPerPage)
    .map(result => {
      return(
        <div className='resultList' key={result.id}>
          <Result result={result} key={result.id}/> 
        </div>
      )
    })

  const pageNumber = Math.ceil(results.length / listingPerPage)

  const changePage = ({selected}:any) => {
    setpageCount(selected)
  }

  interface Result {
    id: String;
    name: String;
    picture: string;
    units: [
      {
          type: String;
          minOccupancy: String,
          maxOccupancy: String,
          sqft: String,
          amenities: []
      }
    ]
    children?: JSX.Element|JSX.Element[]
  }

  useEffect(() => {
    fetch('http://localhost:8000/listing?_sort=name&_order=asc')
    .then(response => response.json())
    .then(res => setResult(res))
    .catch(error => setError(error))
  }, [])

  return (
    <div className="App">
      <div className='heading'>
        <Header title='Property Listings' />
        <SearchBar placeholder='Enter here'/>
        <div className='total'>
          Total Listings Found: {results.length}  
        </div>  
      </div>
      <ReactPaginate 
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageNumber}
        onPageChange={changePage}
        containerClassName='paginationBtn'
        activeClassName='paginationActive'
      />
      {results.length > 0 ?
        <div className='per-page'>
          Listings Per Page: {listingPerPage}  
        </div>  
        : (<Loader />)}
      <div>
        {displayListings}
      </div>   
    </div>
  );
}

export default App;
