import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import usefetch from '../hooks/Usefetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/slices/wishlistslice';
import { addToCart } from '../redux/slices/cartSlice';


function Home() {
    const data = usefetch("https://dummyjson.com/products")
    const dispatch = useDispatch();
    return (
        <>
            <Row className='ms-5' style={{ marginTop: '100px', marginBottom:'50px'}}>
                {
                    data?.length>0?data?.map((product,index)=>
                    <Col key={index} sm={12} md={6} lg={4} xl={3} className='mb-5'>
                    <Card className='shadow mb-5 rounded' style={{ width: '18rem',borderColor:'white', height: '33rem' }}>
                        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                        <Card.Body>
                        <Card.Title style={{ overflowY: 'hidden' }}>{product?.title}</Card.Title>
                            <Card.Text>
                                <p>{product?.description.slice(0,55)}...</p>
                                <h5>$ {product?.price}</h5>
                            </Card.Text>

                           <div className='d-flex align-items-center' style={{justifyContent:'space-between'}}>
                           <Button className='btn btn-light' onClick={()=>dispatch(addToWishList(product))}><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
                            <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}><i className="fa-solid fa-cart-shopping text-warning fa-2x"></i></Button>

                           </div>
                        </Card.Body>
                    </Card>             
                    </Col>
                    ):<p className='text-danger fw-bolder fs-4'>Nothing to Display!!!</p>
                }
            </Row>
        </>
    )
}

export default Home