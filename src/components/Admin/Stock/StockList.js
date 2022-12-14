import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listStock, deleteStock, createStock } from '../../../actions/stockAction';
import {listProducts} from '../../../actions/productActions';
import { useNavigate } from "react-router-dom";
import {  Button} from 'react-bootstrap';

export default function StockList({ history, match }) {

  // const pageNumber = match.params.pageNumber || 1;

  const [stockLists, setStockList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stockList = useSelector((state) => state.stockList);
  const { loading, error, stocks, page, pages } = stockList;

  const stockDelete = useSelector((state) => state.stockDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = stockDelete;

  const stockCreate = useSelector((state) => state.stockCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    stock: createdStock,
  } = stockCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const productList = useSelector((state) => state.productList);
  const { products } = productList;

  
  useEffect(() => {
   

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login');
    }

    if (successCreate) {
      dispatch(listStock('', ));
    } else { 
      dispatch(listStock('', ));
      dispatch(listProducts(''));
    }
  
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdStock,
    
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteStock(id));
    }
  };

  const changeProduct = (value) => {
    
    const stocks_ = stocks.filter((e) => e.product === value);
    setStockList(stocks_);
  }
 

  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Stock</h4>
            <div class="float-right">
              <Link
                class="nav-link"
                data-toggle="collapse"
                to="/stock/create"
                aria-expanded="false"
                aria-controls="charts"
              >
                {' '}
                <button type="button" class="btn btn-primary btn-md btn-block">
                  <i class="icon-plus menu-icon"></i>
                  Add Stock
                </button>
              </Link>
            </div>

            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {(stockLists.length > 0 ? stockLists : stocks).map(
                    (stock) => (
                      <tr key={stock._id}>
                        <td>{stock.product_[0].name}</td>
                        <td> {stock.size}</td>
                        <td>{stock.price}</td>
                        <td>{stock.count}</td>
                        <td>
                          <div class="d-flex flex-row">
                            <div class="p-2">
                              {' '}
                              <Link to={`/stock/edit/${stock._id}`}>
                                <button
                                  type="button"
                                  class="btn btn-outline-dark btn-sm"
                                >
                                  Edit
                                </button>
                              </Link>
                            </div>
                            <div class="p-2">
                              {' '}
                              <button
                                type="button"
                                class="btn btn-outline-danger btn-sm"
                                onClick={() => deleteHandler(stock._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
