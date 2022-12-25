import React from 'react';
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

  interface Result {
    name: String;
    children?: JSX.Element|JSX.Element[]
  }

  useEffect(() => {
    fetch('http://localhost:8000/listing?_sort=name&_order=asc')
    .then(response => response.json())
    .then(res => setResult(res.slice(0,10)))
    .catch(error => setError(error))
  }, [])
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
      {results.length > 0 ? results.map((result:Result) => <Result result={result}/>) : (<Loader />)}
    </div>
  );
}

export default App;
