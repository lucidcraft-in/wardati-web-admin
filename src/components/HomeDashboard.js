import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import NavBar from './Admin/Layout/NavBar';
import SideBar from './Admin/Layout/SideBar';

export default function HomeDashboard() {

    const navigate = useNavigate();

     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;

  useEffect(() => {
    console.log(userInfo);
    if (!userInfo ||!userInfo.isAdmin) {
      navigate('./login');
    }

  }, [])

 
  return (
    <>
      <NavBar />
      <div className="container-fluid page-body-wrapper">
        {' '}
        <SideBar />
        <div className="main-panel">
          {' '}
          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
