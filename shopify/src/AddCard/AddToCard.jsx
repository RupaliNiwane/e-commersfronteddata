import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


const AddToCard = () => { 
  return (
    <div className='container'>
     
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Add Your Product </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> YOU CAN GIVEN MORE PRODUCT </Card.Subtitle>
       <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <Button>AddToCard</Button>
      </Card.Body>
    </Card>
    </div>
  );
}


export default AddToCard ;
