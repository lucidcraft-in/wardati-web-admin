import React, { useEffect, useState } from 'react';
// import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../../components/Message';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../../../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../../../constants/productConstants';
const ProductList = ({ history, match }) => {
  const pageNumber = 1;
  const dispatch = useDispatch();
  const [productsList, setProductList] = useState([]);
  const [searchValue, setSearch] = useState('');

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    // if (!userInfo || !userInfo.isAdmin) {
    //   history.push('/login');
    // }

    if (successCreate) {
      // history.push(`/admin/product/edit/${createdProduct._id}`);
    } else {
      dispatch(listProducts('', pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id));
      //  history.push(`/admin/productlist`);
    }
  };
  const createProductHandler = () => {
    dispatch(createProduct());
  };

  const search = (value) => {
    setSearch(value);
    let product_ = products.filter(
      (e) => e.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );

    setProductList(product_);
  };
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Products</h4>
                <div class="float-right">
                  <Link
                    class="nav-link"
                    data-toggle="collapse"
                    to="/admin/products/create"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i class="icon-plus menu-icon"></i>
                    <span class="menu-title">Add Product</span>
                  </Link>
                </div>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>BRAND</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(searchValue.length > 0 ? productsList : products).map(
                        (product) => (
                          // <LinkContainer to={`/admin/product/detail/${product._id}`}>
                          <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>AED {product.price}</td>
                            {/* <td>{product.category}</td> */}
                            <td>{product.brand}</td>
                            <td>
                              <div className="row">
                                <div className="col">
                                  <Link
                                    class="nav-link"
                                    to={`/admin/product/edit/${product._id}`}
                                  >
                                    <button
                                      type="button"
                                      class="btn btn-outline-dark btn-sm"
                                    >
                                      Edit
                                    </button>
                                  </Link>
                                </div>
                                <div className="col">
                                  <button
                                    type="button"
                                    class="btn btn-outline-danger btn-sm"
                                    onClick={() => deleteHandler(product._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td></td>
                          </tr>
                          // </LinkContainer>
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
  );
};

export default ProductList;
