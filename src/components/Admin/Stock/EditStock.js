import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link ,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../../components/FormContainer';
import {
  listStockDetails,
  updateStock
} from '../../../actions/stockAction';
import { useNavigate } from "react-router-dom";

export default function EditStock({ match, history }) {

    // const stockId = match.params.id;
    const {  id } = useParams();
    const navigate = useNavigate();
  const [color, setColor] = useState('');
   const [count, setCount] = useState('');

  const dispatch = useDispatch();

    const stockDetails = useSelector((state) => state.stockDetails);
  const { loading, error, stock, page, pages } = stockDetails;
  
   const stockUpdate = useSelector((state) => state.stockUpdate);
   const {
     loading: loadingUpdate,
     error: errorUpdate,
     success: successUpdate,
   } = stockUpdate;

  useEffect(() => {
    if (successUpdate) {
      
      // history.push('/admin/stocks');
    } else {
       
      if (!stock.product || stock.stock._id !== id) {
       
        dispatch(listStockDetails(id));
      } else {
        
        setColor(stock.stock.color);
        setCount(stock.stock.count);
      }
    }
  }, [dispatch, history, id, stock, successUpdate]);

  
  
   const submitHandler = (e) => {
     e.preventDefault();
     dispatch(
       updateStock({
         _id: id,
         color,
         count,
          
       })
     );

     navigate('/admin/stock');
   };


 

  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Stock</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
                    
                    <div class="form-group">
                      <label for="exampleSelectProduct">Product</label>
                        <select class="form-control" id="exampleSelectProduct" value={product}
                  onChange={(e) => selectProduct(e.target.value)}
                  required={true}>
                          <option>select product</option>
                          {products.map((obj) => (
                    <option value={obj._id} key={obj._id}>
                      {obj.name}
                    </option>
                  ))}
                        </select>
                      </div>
                      <div class="form-group">
                      <label for="exampleSelectsize">Size</label>
                        <select class="form-control" id="exampleSelectsize"  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required={true}>
                          <option>select size</option>
                          <option>small</option>
                          <option>medium</option>
                          <option>large</option>
                        </select>
                      </div>
                      <div class="form-group">
                      <label for="exampleInputPrice">Price</label>
                      <input type="number" class="form-control" id="exampleInputPrice" placeholder="Price" value={price}
                             onChange={(e) => setPrice(e.target.value)}
                             required={true}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCount4">Count</label>
                      <input type="number" class="form-control" id="exampleInputCount4" placeholder="Count" value={count}
                             onChange={(e) => setCount(e.target.value)}
                             required={true}/>
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
