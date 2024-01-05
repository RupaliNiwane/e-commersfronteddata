import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; // Import Col component
import { useDispatch } from 'react-redux';
import { addToCard } from '../redux/Actions';
import Slideshow from './Slideshow';
import Form from 'react-bootstrap/Form'; // Import Form

const Home = () => {
  const [product, setProduct] = useState([]);
  const [form, setForm] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const addTohandle = (product) => {
    dispatch(addToCard({
      id: Date.now(),
      qty: 1,
    }));
  };

 
  useEffect(() => {
    axios.get('/api/product')
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    axios.get('/api/prod')
      .then((response) => {
        setForm(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div>
    <Form.Control
        type="search"
        placeholder="Search products"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

    <div className="slideshow-container">
      {/* Sidebar with filter options */}
      <div className="sidebar">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Filter</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Sort: Relevance</Card.Subtitle>
            <Card.Text>
              <Form.Select aria-placeholder="sort:Relevance">
                <option type="text">Relevance</option>
                <option type="text">New Arrivals</option>
                <option type="text">Price(High to Low)</option>
                <option type="text">Price(Low to High)</option>
                <option type="text">Rating</option>
                <option type="text">Discount</option>
              </Form.Select>
              <hr />

              {/* Additional filter options */}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
    <div className="home">
    
      <div className="home-page">
        <Row className="g-3">
          {product.map((product, index) => (
            <Col key={product.id} md={3}> {/* Use Col to create a column */}
              <Card>
              <Link className="no-link" to="/Addtocard">
                <img  onClick={addTohandle}  src={product.image} style={{ width: '200px', height: '200px' }} alt={`Product ${index + 1}`} />
                </Link>
                <p><b>{product.title}</b> Price({product.price}) ,
                Rating({product.rating.rate})</p>
                
                {/* <p>{product.description}</p>  */}
                 <Link className="no-link" to="/Addtocard">
                  <Button onClick={addTohandle} variant="primary">Add to Card</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <br></br>
        <div>
        <Row className="g-3">
          {form.map((form, index) => (
            <Col key={form.id} md={3}> {/* Use Col to create a column */}
              <Card>
              <Link className="no-link" to="/Addtocard">
                <img  onClick={addTohandle}  src={form.thumbnail} style={{ width: '200px', height: '200px' }} alt={`form ${index + 1}`} />
                </Link>
                <p> <b>{form.title}</b> Price({form.price}) 
                Rating({form.rating})</p>
                
                {/* <p>{product.description}</p>  */}
                 <Link className="no-link" to="/Addtocard">
                  <Button onClick={addTohandle} variant="primary">Add to Card</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
