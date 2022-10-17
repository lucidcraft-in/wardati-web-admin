import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createPromotion } from '../../../actions/promotionAction';
import { useNavigate } from "react-router-dom";

export default function CreatePromotion() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeAvailable, setPromoCodeAvailable] = useState('');
  const [status, setStatus] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPromotion({
        name,
        phone,
        promoCode,
        status,
      })
    );

    navigate('/admin/promotions');
  };

  const checkPromoCode = async (val) => {

    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
          : [];
        
      
        
           const config = {
             headers: {
               Authorization: `Bearer ${userInfo.token}`,
             },
           };
     
        setPromoCode(val);
           
    
        const { data } = await axios.get(`/api/promotions/${val}`,'', config);
    
    
         
        setPromoCodeAvailable(data.availability);
         
      };
    
      const setStatusOnClick = () => {
      setStatus((status) => !status);
    }

  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Promotion</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
      
                    {/* <div class="form-check">
                      <label for="exampleInputName1" className='form-check-label'> Promotion Active Status</label>
                      <input type="checkbox" class="form-check-input" id="exampleInputName1" placeholder=" Name"/>
                    </div> */}
                      <div class="form-group">
                      <label for="exampleInputName1"> Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder=" Name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputphone">Phone</label>
                      <input type="number" class="form-control" id="exampleInputphone" placeholder="Phone Number"  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required={true}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPromoCode"> Promo Code</label>
                      <input type="text" class="form-control" id="exampleInputPromoCode" placeholder=" PromoCode"  value={promoCode}
                  onChange={(e) => checkPromoCode(e.target.value)}
                  required={true}/>
                    </div>
                    {promoCodeAvailable === false ? (
                <div style={{ color: 'red' }}> Promo code not available</div>
              ) : (
                ''
              )}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  defaultChecked={status}
                  // onChange={(e) => setStatus(e.target.value)}
                  onClick={setStatusOnClick}/>
                        <label class="form-check-label" for="flexCheckDefault">
                             Promotion Active Status
                        </label>
                    </div>
                    
                    
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
  )
}
