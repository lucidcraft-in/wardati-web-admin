import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavBar from './components/Admin/Layout/NavBar';
import SideBar from './components/Admin/Layout/SideBar';
import DashBoard from './components/Admin/DashBoard/DashBoard';
import { Container } from 'react-bootstrap'

import Users from './components/Admin/Users/UserList';
import Products from './components/Admin/Products/ProductList';
import CreateProduct from './components/Admin/Products/CreateProduct';
import Stock from './components/Admin/Stock/StockList';
import Orders from './components/Admin/Orders/OrderList';
import Promotions from './components/Admin/Promotions/PromotionList';
import Category from './components/Admin/Category/CategoryList';
import SubCategory from './components/Admin/SubCategory/SubCategoryList';

function App() {
  return (
    
    <Router>
    <div className="container-scroller">
    <NavBar /> 
    <div className="container-fluid page-body-wrapper"> 
    <SideBar />
    <div class="main-panel"> 
    <div class="content-wrapper">
    <Routes>
          <Route exact path='/' element={< DashBoard />}></Route>
          <Route exact path='/admin/users' element={< Users />}></Route>
          <Route exact path='/admin/products' element={< Products />}></Route>
          <Route exact path='/admin/products/create' element={< CreateProduct />}></Route>
          <Route exact path='/admin/stock' element={< Stock />}></Route>
          <Route exact path='/admin/orders' element={< Orders />}></Route>
          <Route exact path='/admin/promotions' element={< Promotions />}></Route>
          <Route exact path='/admin/category' element={< Category />}></Route>
          <Route exact path='/admin/subcategory' element={< SubCategory />}></Route>
          
   </Routes></div>
    </div>
  </div>
   
   </div>
</Router>
  );
}



export default App

