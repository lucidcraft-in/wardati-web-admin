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
    <div className='main-panel'>
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
           <div class="card">
              <div class="card-body">
                   <h4 class="card-title">Category</h4>
                   <div class="float-right">
                <Link class="nav-link" data-toggle="collapse" to="/admin/category/create" aria-expanded="false" aria-controls="charts">
              <i class="icon-plus menu-icon"></i>
              <span class="menu-title">Add Category</span>
              
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
                      <td>
                        <Link
                          to={`/admin/category/edit/${category._id}`}
                          
                        >
                          <Button variant="light" className="btn-sm">
                            <i className="fas fa-edit"></i>
                            EDIT
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(category._id)}
                        >
                          DELETE
                          <i className="fas fa-trash"></i>
                        </Button>
                      </td>
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
      </div>
    </div>
  )
}
