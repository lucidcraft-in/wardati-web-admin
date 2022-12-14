import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import NavBar from './components/Admin/Layout/NavBar';
import SideBar from './components/Admin/Layout/SideBar';
import DashBoard from './components/Admin/DashBoard/DashBoard';

import Users from './components/Admin/Users/UserList';
import EditUser from './components/Admin/Users/EditUser';

import Products from './components/Admin/Products/ProductList';
import CreateProduct from './components/Admin/Products/CreateProduct';
import EditProduct from './components/Admin/Products/EditProduct';

import Stock from './components/Admin/Stock/StockList';
import CreateStock from './components/Admin/Stock/CreateStock';
import EditStock from './components/Admin/Stock/EditStock';

import Orders from './components/Admin/Orders/OrderList';
import Order from './components/Admin/Orders/Order';

import Promotions from './components/Admin/Promotions/PromotionList';
import CreatePromotion from './components/Admin/Promotions/CreatePromotion';
import EditPromotion from './components/Admin/Promotions/EditPromotion';

import Category from './components/Admin/Category/CategoryList';
import CreateCategory from './components/Admin/Category/CreateCategory';
import EditCategory from './components/Admin/Category/EditCategory';

import SubCategory from './components/Admin/SubCategory/SubCategoryList';
import CreateSubCategory from './components/Admin/SubCategory/CreateSubCategory';
import EditSubCategory from './components/Admin/SubCategory/EditSubCategory';

import LoginScreen from './components/LoginScreen';

import BannerList from './components/Admin/banner/BannerList';
import CreateBanner from './components/Admin/banner/CreateBanner';
import EditBanner from './components/Admin/banner/EditBanner';
import HomeDashboard from './components/HomeDashboard';

function App() {
  // const navigate = useNavigate();
  
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // useEffect(() => {
  //   if (!userInfo.isAdmin) {
  //     navigate('/login');
  //   }
  
   
  // }, [])
  
   
  return (
    <div className="container-scroller">
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route element={<HomeDashboard />}>
          {' '}
          <Route exact path="/" element={<DashBoard />}></Route>
          <Route
            exact
            path="/banners"
            element={<BannerList />}
          ></Route>
          <Route
            exact
            path="/banner/create"
            element={<CreateBanner />}
          ></Route>
          <Route
            exact
            path="/banner/edit/:id"
            element={<EditBanner />}
          ></Route>
          <Route
            exact
            path="/user/edit/:id"
            element={<EditUser />}
          ></Route>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route
            exact
            path="/products/create"
            element={<CreateProduct />}
          ></Route>
          <Route
            exact
            path="/product/edit/:id"
            element={<EditProduct />}
          ></Route>
          <Route exact path="/stock" element={<Stock />}></Route>
          <Route
            exact
            path="/stock/create"
            element={<CreateStock />}
          ></Route>
          <Route
            exact
            path="/stock/edit/:id"
            element={<EditStock />}
          ></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route
            exact
            path="/viewOrder/:id"
            element={<Order />}
          ></Route>
          <Route
            exact
            path="/promotions"
            element={<Promotions />}
          ></Route>
          <Route
            exact
            path="/promotion/create"
            element={<CreatePromotion />}
          ></Route>
          <Route
            exact
            path="/promotion/edit/:id"
            element={<EditPromotion />}
          ></Route>
          <Route exact path="/category" element={<Category />}></Route>
          <Route
            exact
            path="/category/create"
            element={<CreateCategory />}
          ></Route>
          <Route
            exact
            path="/category/edit/:id"
            element={<EditCategory />}
          ></Route>
          <Route
            exact
            path="/subcategory"
            element={<SubCategory />}
          ></Route>
          <Route
            exact
            path="/subcategory/create"
            element={<CreateSubCategory />}
          ></Route>
          <Route
            exact
            path="/subcategory/edit/:id"
            element={<EditSubCategory />}
          ></Route>
          <Route exact path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
