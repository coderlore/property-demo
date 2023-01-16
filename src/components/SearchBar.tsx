import { type } from 'os';
import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'


interface Props {
  placeholder: string;
  handleFilter: any;
  setValue: any;
}

const SearchBar:React.FC<Props> = ({placeholder, handleFilter, setValue}) => {

  return (
    <div className='mt-3'>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search for property"
          aria-label="Property name"
          aria-describedby="property-name-search"
          onChange={(e) => {setValue(e.target.value)}}
        />
        <Button variant="dark" id="property-name-search" onClick={handleFilter} >
          Search
        </Button>
      </InputGroup>
    </div>
  )
}

export default SearchBar