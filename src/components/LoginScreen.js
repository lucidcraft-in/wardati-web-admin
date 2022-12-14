import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import { useNavigate  } from "react-router-dom";
const LoginScreen = ({ location }) => {  
  const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    // const redirect = location.search ? location.search.split('=')[1] : '/'
    useEffect(() => {
        if (userInfo) {
          navigate('/');
        }
    }, [ userInfo])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
      }
    return (
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    {/* <img src="../../images/logo.svg" alt="logo"/> */}
                    Wardati
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form onSubmit={submitHandler} className="pt-3">
                    <div className="form-group">
                      <input type="email" value={email} className="form-control form-control-lg"  onChange={(e) => setEmail(e.target.value)} placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                      <input type="password" value={password} className="form-control form-control-lg"  onChange={(e) => setPassword(e.target.value)}
                  required placeholder="Password"/>
                    </div>
                                    <div className="mt-3">
                                    <input className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit" value="SIGN IN" />

                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input"/>
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">Forgot password?</a>
                    </div>
                    {/* <div className="mb-2">
                      <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                        <i className="ti-facebook mr-2"></i>Connect using facebook
                      </button>
                    </div> */}
                  
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
    
      </div>
         
      );
    
}

export default LoginScreen