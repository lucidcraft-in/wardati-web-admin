import React, { useState, useEffect } from 'react'
import { Link ,useNavigate,useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory,listCategoryDetails } from '../../../actions/categoryActions'
import { CATEGORY_UPDATE_RESET } from '../../../constants/categoryConstants'


export default function EditCategory({history, match}) {

  // const categoryId = match.params.id;
  const [categoryName, setCategoryName] = useState('')
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState(0)
  const {  id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const categoryDetails = useSelector((state) => state.categoryDetails)
  const { loading, error, category } = categoryDetails;
  const categoryUpdate = useSelector((state) => state.categoryUpdate)
  const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
  } = categoryUpdate;


  useEffect(() => {
      if (successUpdate) {
        dispatch({ type: CATEGORY_UPDATE_RESET })
        navigate('/admin/category')
      } else {
        if (!category.categoryName || category._id !== id) {
          dispatch(listCategoryDetails(id))
        } else {
          console.log(category)
          setCategoryName(category.categoryName)
          setTitle(category.title)
          // setImage(product.image)
          setPriority(category.priority)
         
        }
      }
  }, [dispatch, history, id, category, successUpdate])
  
  
const submitHandler = (e) => {
  e.preventDefault()
  dispatch(
    updateCategory({
      _id: id,
      categoryName,
      title,
      priority,
    })
  );
  navigate('/admin/category');
  }

  return (
   
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Category</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
                    
                    
                      <div class="form-group">
                      <label for="exampleInputName">Category Name</label>
                      <input type="text" class="form-control" id="exampleInputName" placeholder="Category Name" value={categoryName}
                             onChange={(e) => setCategoryName(e.target.value)}
                             required={true}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName">Title</label>
                      <input type="text" class="form-control" id="exampleInputTitle" placeholder="Title" value={title}
                             onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPriority4">Priority</label>
                      <input type="number" class="form-control" id="exampleInputPriority4" placeholder="Priority" value={priority}
                             onChange={(e) => setPriority(e.target.value)}/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary mr-2" >Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
     
  )
}
