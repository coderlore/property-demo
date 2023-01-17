import { type } from 'os';
import React from 'react'
import { Button, Form, InputGroup, Row, Col } from 'react-bootstrap'


interface Props {
  placeholder: string;
  handleFilter: any;
  setValue: any;
}

const SearchBar:React.FC<Props> = ({placeholder, handleFilter, setValue}) => {

  return (
    <div className='m-3 w-100'>
      <InputGroup className="mb-3 d-flex justify-content-center">
        <Form.Control
          placeholder="Search for property"
          aria-label="Property name"
          aria-describedby="property-name-search"
          onChange={(e) => {setValue(e.target.value)}}
          size='lg'
          id='form-input'
        />
        <Button variant="primary" id="property-name-search" onClick={handleFilter} >
          Search
        </Button>
    </InputGroup>
      
    </div>
  )
}

export default SearchBar