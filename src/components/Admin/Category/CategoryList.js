import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { listCategories, createCategory,deleteCategory } from "../../../actions/categoryActions";
import { CATEGORY_CREATE_RESET } from "../../../constants/categoryConstants";
import {  Button} from 'react-bootstrap';


export default function CategoryList({ history, match }) {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete)

  const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = categoryDelete

  console.log(categories)

  const categoryCreate = useSelector((state) => state.categoryCreate)
  const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      category: createCategory,
  } = categoryCreate;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: CATEGORY_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/category/edit/${createCategory._id}`)
    } else {
      dispatch(listCategories(''))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createCategory,
   
])

const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCategory(id))
    }
  }

const createCategoryHandler = () => {
    dispatch(createCategory())
}

  return (
   
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Category</h4>
                   <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/category/create" aria-expanded="false" aria-controls="charts">
                {' '}
                <button type="button" class="btn btn-primary btn-md btn-block">
                  <i class="icon-plus menu-icon"></i>
                  Add Category
                </button>
              
            </Link>
                   </div>
                
                <div class="table-responsive">
                  <table class="table table-striped">
                  <thead>
                        <tr>
                        <th>CATEGORY NAME</th>
                      <th>TITLE</th>
                      <th>PRIORITY</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map((category) => (
                      <tr key={category._id}>
                      <td>{category.categoryName}</td>
                      <td> {category.title}</td>
                      <td>{category.priority}</td>
                     
                      <td>
                      <div class="d-flex flex-row">
                      <div class="p-2">
                            {' '}
                        <Link
                          to={`/admin/category/edit/${category._id}`} >
                          <button
                                type="button"
                                class="btn btn-outline-dark btn-sm">
                                Edit
                              </button>
                        </Link>
                        </div>
                        <div class="p-2">
                            {' '}
                        <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                              onClick={() => deleteHandler(category._id)}
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
      
  )
}
