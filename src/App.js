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
import CreateStock from './components/Admin/Stock/CreateStock';
import Orders from './components/Admin/Orders/OrderList';
import Order from './components/Admin/Orders/Order';
import Promotions from './components/Admin/Promotions/PromotionList';
import CreatePromotion from './components/Admin/Promotions/CreatePromotion';
import Category from './components/Admin/Category/CategoryList';
import CreateCategory from './components/Admin/Category/CreateCategory';
import EditCategory from './components/Admin/Category/EditCategory';
import SubCategory from './components/Admin/SubCategory/SubCategoryList';
import CreateSubCategory from './components/Admin/SubCategory/CreateSubCategory';
import EditSubCategory from './components/Admin/SubCategory/EditSubCategory';
import LoginScreen from './components/LoginScreen';

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
          <Route exact path='/admin/stock/create' element={< CreateStock />}></Route>
          <Route exact path='/admin/orders' element={< Orders />}></Route>
          <Route exact path='/admin/viewOrder/:id' element={< Order />}></Route>
          <Route exact path='/admin/promotions' element={< Promotions />}></Route>
          <Route exact path='/admin/promotions/create' element={< CreatePromotion />}></Route>
          <Route exact path='/admin/category' element={< Category />}></Route>
          <Route exact path='/admin/category/create' element={< CreateCategory />}></Route>
          <Route exact path='/admin/category/edit/:id' element={< EditCategory />}></Route>
          <Route exact path='/admin/subcategory' element={< SubCategory />}></Route>
          <Route exact path='/admin/subcategory/create' element={< CreateSubCategory />}></Route>
          <Route exact path='/admin/subcategory/edit/:id' element={< EditSubCategory />}></Route>
          <Route exact path="/login" element={<LoginScreen />} />       
   </Routes></div>
    </div>
  </div>
   
   </div>
</Router>
  );
}



export default App

