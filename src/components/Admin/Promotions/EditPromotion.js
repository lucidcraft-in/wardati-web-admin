import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PROMOTION_UPDATE_RESET } from '../../../constants/promotionConstant';
import {
  listPromotionDetails,
  updatePromotion,
} from '../../../actions/promotionAction';

import Axios from '../../../axios/axios';

const EditPromotion = ({ match, history }) => {
  
  const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();
 
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeAvailable, setPromoCodeAvailable] = useState('');
  const [status, setStatus] = useState(true);

  
  

  const promotionDetails = useSelector((state) => state.promotionDetails);
  const { loading, error, promotion } = promotionDetails;

  const promotionUpdate = useSelector((state) => state.promotionUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = promotionUpdate;


  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROMOTION_UPDATE_RESET });
      history.push('/promotions');
    } else {
      if (!promotion?.promotion?.name || promotion?.promotion?._id !== id) {
        dispatch(listPromotionDetails(id));
      } else {
        setName(promotion?.promotion?.name);
        setPhone(promotion?.promotion?.phone);
        setPromoCode(promotion?.promotion?.code);
        setStatus(promotion?.promotion?.isActive);
      }
    }
  }, [dispatch, history, id, promotion, successUpdate]);


    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        updatePromotion({
          _id:id,
          name,
          phone,
          promoCode,
          status,
        })
      );

      navigate('/promotions');
  };
  
    const setStatusOnClick = () => {
      setStatus((status) => !status);
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

     const { data } = await Axios.post(`/api/promotion/${val}`, '', config);

     setPromoCodeAvailable(data.availability);
   };

  return (
    <div>
      <div class="row">
        <div class="col-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Edit Promotion</h4>
              <form class="forms-sample" onSubmit={submitHandler}>
                {/* <div class="form-check">
                      <label for="exampleInputName1" className='form-check-label'> Promotion Active Status</label>
                      <input type="checkbox" class="form-check-input" id="exampleInputName1" placeholder=" Name"/>
                    </div> */}
                <div class="form-group">
                  <label for="exampleInputName1"> Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputphone">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required={true}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPromoCode"> Promo Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" PromoCode"
                    value={promoCode}
                    onChange={(e) => checkPromoCode(e.target.value)}
                    required={true}
                  />
                </div>
                {promoCodeAvailable === false ? (
                  <div style={{ color: 'red' }}> Promo code not available</div>
                ) : (
                  ''
                )}
                <div class="form-check">
                  <input
                    class=" "
                    type="checkbox"
                    value=""
                    defaultChecked={status}
                    style={{ width: '22px', height: '22px' }}
                    onClick={setStatusOnClick}
                  />
                  &nbsp;&nbsp; Promotion Active Status
                </div>

                <button
                  type="submit"
                  class="btn btn-primary mr-2"
                  disabled={promoCodeAvailable === false ? true : false}
                >
                  Submit
                </button>
                <button class="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default EditPromotion;