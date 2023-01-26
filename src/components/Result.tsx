import { type } from 'os';
import React from 'react'
import { useState, useEffect } from "react";
import {ResultType} from '../types/Result.types'
import { Card, ListGroup, Modal, Button } from 'react-bootstrap'

interface Props {
    result: ResultType;
}

const Result:React.FC<Props> = ({result}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        // <div className='result-col' key={result.id} >
        //     <div className='result-row' >
        //         <div className='resultName'>{result.name}</div>
        //     </div>
        //     <div className='result-row'>
        //         <div className='resultImg'><img src={result.picture} alt="Property Img"/></div>
        //     </div>
        //     <div className='result-row'>
        //         <div className='resultUnits'>Unit Type {result.units.map(unit => <div>{unit.type}</div>)}</div>
        //     </div>
        //     <div className='result-row'>
        //         <div className='resultSqft'>Average Sqft {result.units.map(unit => <div>{unit.sqft}</div>)}</div>
        //     </div>
        //     <div className='result-row'>
        //         <div className='resultRange'>Range {result.units.map(unit => <div>{unit.minOccupancy}-{unit.maxOccupancy} people</div>)}</div>
        //     </div>
        // </div>
        <Card className='mb-3' style={{ display: 'block', width: 600, padding: 30 }}>
            <Card.Img variant='top' src={result.picture} />
            <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={handleShow}>
                Read more
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{result.name} available units</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup horizontal className='group-listings'>
                        <ListGroup.Item>Unit Type{result.units.map(unit => <div>{unit.type}</div>)}</ListGroup.Item>
                        <ListGroup.Item>Sq Ft{result.units.map(unit => <div>{unit.sqft}</div>)}</ListGroup.Item>
                        <ListGroup.Item>Occupancy{result.units.map(unit => <div>{unit.minOccupancy}-{unit.maxOccupancy}</div>)}</ListGroup.Item>
                        <ListGroup.Item>Amenities{result.units.map(unit => <div>{unit.amenities}</div>)}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </Card>
    )
}


export default Result