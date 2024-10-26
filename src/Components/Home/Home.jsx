import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner, Alert, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from Fake Store API
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading( );
       console.log(response);
       
      })
      .catch((error) => {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      });
  }, []);

// Display loading spinner
if (loading) {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
        </div>
    );
    }

      // Display error message if fetch fails
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }
  return (
    <div className="container py-2">
            <h1 className='mx-auto text-dark w-100 text-center my-5'>My E-Commerce Project</h1>
            <div className="row">
                {products.map((product)=>
                <div key={product.id} className='col-12 col-md-4 col-lg-2 mb-4'>
                        <div className="product cursor-pointer p-3 mt-2 ">
                                <img className='w-100' src={product.image} alt={product.title} />
                                <span className='text-main font-sm fw-bold'>{product.name}</span>
                                <h3 className='h6'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
                                <div className='d-flex justify-content-between mt-3'>
                                    <span>{product.price} EGY</span>
                                    <span> <i className='fas fa-star rating-color'></i> ⭐ {product.rating.rate} / 5</span>
                                </div>
                            <button className='btn bg-main text-white w-100 btn-sm mt-2'>Add Cart</button>
                        </div>
                </div> )}
            </div>
        </div>
  )
}
