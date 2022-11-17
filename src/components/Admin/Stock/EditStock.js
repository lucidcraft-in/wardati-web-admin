import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import { useDispatch,useSelector } from 'react-redux';
 import {listProducts} from '../../../actions/productActions';
 import {createStock,updateStock,listStockDetails} from '../../../actions/stockAction';
 import { useNavigate,useParams } from "react-router-dom";

const  EditStock =({history}) =>{

  const dispatch = useDispatch();
  const {  id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState('');

  const [size, setSize] = useState('');
  console.log(size,'size')
  const [price, setPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  
  const [count, setCount] = useState();

  const [sizeList, setSizeList] = useState([]);
  // ..........................................................

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
      
      navigate('/lz-admin/stock');
    } else {
       
      if (!stock.product || stock.stock._id !== id) {
       
        dispatch(listStockDetails(id));
      } else {
         setProduct(stock.stock.product);
        setPrice(stock.stock.price);
        setCount(stock.stock.count);
        setSize(stock.stock.size)
        setSellingPrice(stock.stock.sellingPrice)
      }
    }
  }, [dispatch, history, id, stock, successUpdate]);

  const selectProduct = (value) => {
    setProduct(value);
  
    let product = stock.find((e) => e._id === value);
  
    setSizeList(product.stock);
  }
  // .................................................................

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateStock({
        _id: id,
        product,
        size,
        price,
        count,
        sellingPrice
      })
    );
  
    navigate('/lz-admin/stock');
  };

  return (
    <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Edit Stock</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
                  <div class="form-group">
                    <label for="exampleSelectProduct">Product</label>
               
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Product "
                      value={stock?.product?.name}
                      // onChange={(e) => setProduct(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectsize">Size / Product Type</label>
                    
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Product type / Size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPrice">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPrice"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPrice1">Selling Price</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPrice1"
                      placeholder="Selling Price"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputCount4">Count</label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputCount4"
                      placeholder="Count"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                      required={true}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button class="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EditStock
