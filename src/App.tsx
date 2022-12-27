import React from 'react';
import ReactPaginate from 'react-paginate'
import './App.css';
import Content from './Content'
import Header from './Header'
import { useState, useEffect } from "react";
import { json } from 'stream/consumers';
import Loader from './components/Loader'
import Result from './components/Result'

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

  const listingPerPage:number = 5
  const pagesVisited = pageCount * listingPerPage

  const displayListings = results
    .slice(pagesVisited, pagesVisited + listingPerPage)
    .map(result => {
      return(
        <div className='result'>
            <Result result={result}/>
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
    fetch('http://localhost:8000/listing?_sort=name&_order=asc?_page=1&_limit=12')
    .then(response => response.json())
    .then(res => setResult(res))
    .catch(error => setError(error))
  }, [])

  // useEffect(() => {
  //   const getData = async() => {
  //     const res = await fetch(
  //       `http://localhost:8000/listing?_sort=name&_order=asc?_page=1&_limit=${limit}`
  //     )
  //     const data = await res.json()
  //     const total = res.headers.get('x-total-count')
  //     setpageCount(Math.ceil(Number(total)/limit)) 
  //     setResult(data)
  //   }
  //   getData()
  // }, [limit])

  // const fetchData = async (currentPage:any) => {
  //   const res = await fetch(`http://localhost:8000/listing?_sort=name&_order=asc?_page=1&_limit=${limit}`)
  //   const data = await res.json()
  //   return data
  // }

  // const handlePageClick = async (data:any) => {
  //   let currentPage = data.selected + 1

  //   const dataServer = await fetchData(currentPage) 
  //   setResult(dataServer)  
  // }
  // const [result, setResult] = useState<resultProps[]>([])

  // useEffect(() => {
  //   const api = async () => {
  //     const data = await fetch("http://localhost:8000/listing?name=Supportal", {
  //       method: "GET"
  //     })
  //     const jsonData = await data.json()
  //     setResult(jsonData.results)
  //   }
  //   api()
  // }, [])
  // console.log(result)
  return (
    <div className="App">
      <Header title='Property Listings' />
      <Content title='Name Placeholder'/>
      <ReactPaginate 
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageNumber}
        onPageChange={changePage}
        containerClassName="paginationBtn"
      />
      <div>
        {displayListings}
      </div>      
    </div>
  );
}

export default App;
