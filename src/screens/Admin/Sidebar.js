import React from 'react'
import { Link, useHistory } from 'react-router-dom';
 

export default function Sidebar() {


  const history = useHistory();
    console.log(history);

  const logoutHandler = () => {
    if (window.confirm('Are you sure to logout Admin')) {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('cartItems');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('paymentMethod');
      history.push('/');
      window.location.reload();
    }
    
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <i className="fa fa-fw fa-home"></i> Home
      </Link>
      <Link to="/admin/userlist">
        <i className="fa fa-fw fa-user"></i> Users
      </Link>
      <Link to="/admin/productlist">
        <i className="fa  fa-box"></i> Products
      </Link>
      <Link to="/admin/stocks">
        <i className="fa fa-fw fa-box"></i> Stock
      </Link>
      <Link to="/admin/orderlist">
        <i className="fa fa-sort"></i> Orders
      </Link>
      <Link to="/admin/promotions">
        <i className="fa fa-puzzle-piece"></i> Promotions
      </Link>
      <Link to="/admin/categorylist">
        <i className="fa fa-bars"></i> Category
      </Link>
      <Link to="/admin/subcategories">
        <i className="fa fa-list"></i> Sub Category
      </Link>
      <Link to="#" onClick={logoutHandler}>
        <i className="fa fa-sign-in"></i> Logout
      </Link>
    </div>
  );
}
