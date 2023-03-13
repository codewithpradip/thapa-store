import React from 'react'
import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

function Home() {
  return (
    <div>
        <h2>Letest Products</h2>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Home