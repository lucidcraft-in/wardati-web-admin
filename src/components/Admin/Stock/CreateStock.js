import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import { useDispatch,useSelector } from 'react-redux';
 import {listProducts} from '../../../actions/productActions';
 import {createStock} from '../../../actions/stockAction';
 import { useNavigate } from "react-router-dom";

export default function CreateStock({history}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [count, setCount] = useState();
  
  const [sizeList, setSizeList] = useState([]);
  

  useEffect(() => {
    dispatch(listProducts(''));
 }, [])

 const productList = useSelector((state) => state.productList);
 const { loading, error, products, page, pages } = productList;

 const selectProduct = (value) => {
  setProduct(value);

  let product = products.find((e) => e._id === value);

  setSizeList(product.stock);
}

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(
    createStock({
      product,
      size,
      price,
      count,
      sellingPrice,
    })
  );

  navigate('/lz-admin/stock');
};


  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create Stock</h4>
            <form class="forms-sample" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="exampleSelectProduct">Product</label>
                <select
                  class="form-control"
                  id="exampleSelectProduct"
                  value={product}
                  onChange={(e) => selectProduct(e.target.value)}
                  required={true}
                >
                  <option value="">Select product</option>
                  {products.map((obj) => (
                    <option value={obj._id} key={obj._id}>
                      {obj.name}
                    </option>
                  ))}
                </select>
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
              <Link to= '/lz-admin/stock'>
              <button class="btn btn-light">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
