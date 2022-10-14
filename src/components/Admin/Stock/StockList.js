import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listStock, deleteStock, createStock } from '../../../actions/stockAction';
import {listProducts} from '../../../actions/productActions';
import { useNavigate } from "react-router-dom";

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
    <div className='main-panel'>
        <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Stock</h4>
                   <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/stock/create" aria-expanded="false" aria-controls="charts">
              <i class="icon-plus menu-icon"></i>
              <span class="menu-title">Add Stock</span>
              
            </Link>
                   </div>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                          <th>
                           Product Name
                          </th>
                          <th>
                             Size
                          </th>
                          <th>
                            Price
                          </th>
                          <th>
                            Count
                          </th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {(stockLists.length > 0 ? stockLists : stocks).map(
                    (stock) => (
                      <tr key={stock._id}>
                        <td>{stock.product_[0].name}</td>
                        <td> {stock.size}</td>
                        <td>
                          {stock.price}
                        </td>
                        <td>{stock.count}</td>
                        
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
      </div>
    </div>
  )
}
