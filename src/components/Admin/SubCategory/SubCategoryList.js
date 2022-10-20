import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  listSubCategories,
  deleteSubCategory,
  createSubCategory,
} from '../../../actions/subcategoryAction';
import { Link } from 'react-router-dom';
import { SUB_CATEGORY_CREATE_RESET } from '../../../constants/subCategoryConstant';

export default function SubCategoryList({ history, match }) {

  const pageNumber =  1;
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { loading, error, subCategories, page, pages } = subCategoryList;

    
  const subCategoryDelete = useSelector((state) => state.subCategoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = subCategoryDelete;

  
  const subCategoryCreate = useSelector((state) => state.subCategoryCreate)
  const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      subCategory: createSubCategory,
  } = subCategoryCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: SUB_CATEGORY_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login');
    }
 
    if (successCreate) {
      dispatch(listSubCategories('',pageNumber ));
    } else {
      dispatch(listSubCategories('',pageNumber ));
    }

   
  }, [    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createSubCategory,]);
   


    const deleteHandler = (id) => {
      if (window.confirm('Are you sure')) {
        dispatch(deleteSubCategory(id));
      }
  };

 
  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">SubCategory</h4>
            <div class="float-right">
              <Link to="/lz-admin/subcategory/create">
                {' '}
                <button type="button" class="btn btn-primary btn-md btn-block">
                  <i class="icon-plus menu-icon"></i>
                  Add SubCategory
                </button>
              </Link>
            </div>

            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>TITTLE</th>
                    <th>CATEGORY</th>
                  </tr>
                </thead>
                <tbody>
                  {subCategories.map((sub) => (
                    <tr key={sub._id}>
                      <td>{sub.name}</td>
                      <td> {sub.tittle}</td>
                      <td> {sub.category_[0].categoryName}</td>
                      <td>
                        <div class="d-flex flex-row">
                          <div class="p-2">
                            {' '}
                            <Link to={`/lz-admin/subcategory/edit/${sub._id}`}>
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
                              onClick={() => deleteHandler(sub._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
