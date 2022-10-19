import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import NavBar from './components/Admin/Layout/NavBar';
import SideBar from './components/Admin/Layout/SideBar';
import DashBoard from './components/Admin/DashBoard/DashBoard';

import Users from './components/Admin/Users/UserList';
import EditUser from './components/Admin/Users/EditUser';

import Products from './components/Admin/Products/ProductList';
import CreateProduct from './components/Admin/Products/CreateProduct';

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

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      {userInfo && userInfo.isAdmin ? (
        <div className="container-scroller">
          <NavBar />
          <div className="container-fluid page-body-wrapper">
            <SideBar />
            <div className="main-panel">
              <div className="content-wrapper">
                <Routes>
                  <Route exact path="/" element={<DashBoard />}></Route>
                  <Route
                    exact
                    path="/lz-admin/banner"
                    element={<BannerList />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/banner/create"
                    element={<CreateBanner />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/banner/edit/:id"
                    element={<EditBanner />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/user/edit/:id"
                    element={<EditUser />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/users"
                    element={<Users />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/products"
                    element={<Products />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/products/create"
                    element={<CreateProduct />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/stock"
                    element={<Stock />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/stock/create"
                    element={<CreateStock />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/stock/edit/:id"
                    element={<EditStock />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/orders"
                    element={<Orders />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/viewOrder/:id"
                    element={<Order />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/promotions"
                    element={<Promotions />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/promotion/create"
                    element={<CreatePromotion />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/promotion/edit/:id"
                    element={<EditPromotion />}
                  ></Route>

                  <Route
                    exact
                    path="/lz-admin/category"
                    element={<Category />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/category/create"
                    element={<CreateCategory />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/category/edit/:id"
                    element={<EditCategory />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/subcategory"
                    element={<SubCategory />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/subcategory/create"
                    element={<CreateSubCategory />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/subcategory/edit/:id"
                    element={<EditSubCategory />}
                  ></Route>
                  <Route
                    exact
                    path="/lz-admin/login"
                    element={<LoginScreen />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route exact path="/lz-admin/login" element={<LoginScreen />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
