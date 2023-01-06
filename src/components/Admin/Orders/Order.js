import React, { useState, useEffect } from 'react';
import Axios from '../../../axios/axios';
import { Link,useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../Message';
import Loader from '../../Loader';
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
  shippingOrder,
} from '../../../actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../../../constants/orderConstants';
import { useNavigate  } from "react-router-dom";
const Order = ({ match }) => {
  const  orderId  = useParams();
  // const orderId = match.params.id;
  const navigate = useNavigate();
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const shippedCreate = useSelector((state) => state.orderShipped);
  const { success:successShippingUpdate } = shippedCreate;
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
 
  useEffect(() => {
    if (!userInfo) {
      
      navigate('/login');
    }

    
   

    if (!order || successPay || successDeliver || order._id !== orderId.id || successShippingUpdate) {

      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId.id));
    } else if (!order.isPaid) {
      // if (!window.paypal) {
      //   addPayPalScript();
      // } else {
      //   setSdkReady(true);
      // }
    }
  }, [dispatch,  successPay, successDeliver, order,successShippingUpdate]);
  

  const deliverHandler = (e, status) => {
    
   
    if (window.confirm('Are you sure')) {
      if (status === 0) {
         dispatch(shippingOrder(order));
      } else {
        dispatch(deliverOrder(order));
      }
    }
   // 
  };
  
console.log(order)

 return loading ? (
  <Loader />
) : error ? (
  <Message variant="danger">{error}</Message>
) : (
  <div>

    <div className="main">
      <>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <span className="place-order-head">Shipping</span>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>{' '}
                  <a href={`mailto:${order.user.email}`}>
                    {order.user.email}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.fName} -{' '}
                  {order.shippingAddress.lName} <br />
                  {order.shippingAddress.address},{' '}
                  {order.shippingAddress.city}{' '}
                  {order.shippingAddress.apartment},{' '}
                  {order.shippingAddress.emirate}
                  <br />
                  {order.shippingAddress.phone}
                </p>
                <p>
                  <strong>Status: </strong>{' '}
                  {order.isShipped === false ? (
                    <span style={{ color: 'green', fontWeight: 500 }}>
                      ORDERED
                    </span>
                  ) : order.isDelivered === false ? (
                    <span style={{ color: 'green', fontWeight: 500 }}>
                      SHIPPED
                    </span>
                  ) : (
                    <span style={{ color: 'green', fontWeight: 500 }}>
                      DELIVERED
                    </span>
                  )}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <span className="place-order-head">Payment Method</span>
                <p>
                  <strong>Method: </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">
                    Paid on {order.paidAt.substring(0, 10)}
                  </Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <span className="place-order-head">Order Items</span>
                {order.orderItems.length === 0 ? (
                  <Message>Order is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={2} sm={4} xs={3} lg={2}>
                            <Image
                              src={item.productDetails.images[0].url}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col md={6} sm={4} xs={4} lg={2}>
                            
                              {item.productDetails.name}
                          
                          </Col>
                          <Col md={4} sm={4} xs={4} lg={2}>
                            {item.quantity} x AED {item.stockDetails.sellingPrice} = AED{' '}
                            {item.quantity * item.stockDetails.sellingPrice}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="place-order-head">Order Summary</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>AED{order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>AED{order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>AED{order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>AED{order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                {/* {loadingDeliver && <Loader />} */}
                {/* {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && ( */}
                <ListGroup.Item>
                  {order.isShipped === false ? (
                    <Button
                      type="button"
                      className="btn btn-block btn-secondary"
                      onClick={(e) => deliverHandler(e, 0)}
                    >
                      Mark As Shipped
                    </Button>
                  ) : order.isDelivered === false ? (
                    <Button
                      type="button"
                      className="btn btn-block btn-primary"
                      onClick={(e) => deliverHandler(e, 1)}
                    >
                      Mark As Delivered
                    </Button>
                  ) : (
                    <Button type="button" className="btn btn-block btn-success" disabled>
                      Paid and Delivered
                    </Button>
                  )}
                </ListGroup.Item>

                {/* // )} */}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
    </div>
  </div>
);
};


export default Order;
