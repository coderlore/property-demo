import React from 'react';
import ReactPaginate from 'react-paginate'
import Pagination from 'react-bootstrap/Pagination'
import './App.css';
import Header from './components/Header'
import { useState, useEffect } from "react";
import { json } from 'stream/consumers';
import Loader from './components/Loader'
import Result from './components/Result'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

type resultProps = {
  id: any;
  name: String;
  picture: any;
  units: [
    {
        type: String;
        minOccupancy: String,
        maxOccupancy: String,
        sqft: String,
        amenities: []
    }
  ]
}

function App() {
  const [results, setResult] = useState<resultProps[]>([])
  const [error, setError] = useState({})
  const [pageCount, setpageCount] = useState(0)

  // const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState("")
  const handleFilter = async (event:any) => {
    let propertyName = capFirstLetter(value)
    const res = await fetch(`http://localhost:8000/listing?name=${propertyName}`)
    const filteredData = await res.json()
    setResult(filteredData)
  }

  //First char uppercase 
  function capFirstLetter(str:string){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  //Function to pass filtered value
  let [filterTextValue, updateFilterText] = useState('all')

  let filteredPropertyList = results.filter(result => {
    let newResults = result.units.map((unit:any) => {
      if (unit.amenities.includes(filterTextValue)){
        return result
      }
    })
    // setResult(filteredPropertyList)
    // console.log(filteredPropertyList)
  })

  function onFilterValueSelected(filterValue:string){
    updateFilterText(filterValue)
  }

  //Pagination 
  const listingPerPage:number = 10
  const pagesVisited = pageCount * listingPerPage

  const displayListings = results
    .slice(pagesVisited, pagesVisited + listingPerPage)
    .map(result => {
      return(
        <div className='resultList' key={result.id}>
          <Result result={result} /> 
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
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Affordable Properties</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Header title='Affordable housing' />
      </div>
      <SearchBar placeholder='Enter here' handleFilter={handleFilter} setValue={setValue}/>
      <Filters placeholder='Enter here' handleFilter={handleFilter} setResult={setResult} filterValueSelected={onFilterValueSelected}/>
        <div className='total m-3'>
          Total Listings Found: {results.length}  
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
          
        </div>  
        : (<Loader />)}
      <div>
        {displayListings}
      </div>
    </div>
  );
}

export default App;
