import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../Message';
import Loader from '../../Loader';
import { listOrders } from '../../../actions/orderActions'
import { useNavigate  } from "react-router-dom";

const OrderList = ({  }) => {
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const orderList = useSelector((state) => state.orderList)
    const { loading, error, orders } = orderList
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
      if (userInfo && userInfo.isAdmin) {
        dispatch(listOrders())
      } else {
        navigate('/');
        
      }
    }, [dispatch, userInfo])

  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Order</h4>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>ORDER NUMBER</th>
                      <th>USER</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>STATUS</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{`#GN${order._id}`}</td>
                        <td>{order.user && order.user.name}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>AED {order.totalPrice}</td>
                        <td>
                          {order.isPaid && order.paidAt ? (
                            order.paidAt.substring(0, 10)
                          ) : (
                            <i
                              className="fas fa-times"
                              style={{ color: 'red' }}
                            ></i>
                          )}
                        </td>
                        <td>
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
                        </td>
                        <td>
                          <div className="row">
                            <div className="col">
                              <Link
                                class="nav-link"
                                to={`/lz-admin/viewOrder/${order._id}`}
                              >
                                <button
                                  type="button"
                                  class="btn btn-outline-info btn-sm"
                                >
                                  View
                                </button>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderList