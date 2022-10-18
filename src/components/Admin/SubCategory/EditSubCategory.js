import React, { useState, useEffect } from 'react';
import { useNavigate ,useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SUB_CATEGORY_UPDATE_RESET } from '../../../constants/subCategoryConstant';
import {
  listSubCategoryDetails,
  listSubCategories,
  updateSubCategory,
} from '../../../actions/subcategoryAction';
import { listCategories } from '../../../actions/categoryActions';


export default function EditSubCategory({ history, match }) {

  const {  id } = useParams();
  
  // console.log(subCategoryId,'subCategoryId')
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('weert');
console.log(category,'category')
  const dispatch = useDispatch();
  
    const subCategoryDetails = useSelector((state) => state.subCategoryDetails);
    const { loading, error, subCategory } = subCategoryDetails;

    const subcategoryUpdate = useSelector((state) => state.subCategoryUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
  } = subcategoryUpdate;
  
    const categoryList = useSelector((state) => state.categoryList);
    const {   categories } = categoryList;
 
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SUB_CATEGORY_UPDATE_RESET });
      navigate('/admin/subcategory');
    } else {
      if (!subCategory.name || subCategory._id !== id) {
        
        dispatch(listSubCategoryDetails(id));
         dispatch(listSubCategories(''));
      } else {
        
        setName(subCategory.name);
        setTittle(subCategory.tittle);
        setCategory(subCategory.category);
      }
    }
     
  }, [dispatch, history, subCategory, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(
       updateSubCategory({
         _id: id,
         name,
         tittle,
         category,
       })
     );

     navigate('/admin/subcategory');
  };

  return (

        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Edit SubCategory</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
                    
                    
                      <div class="form-group">
                      <label for="exampleInputName1"> Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder=" Name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName">Title</label>
                      <input type="text" class="form-control" id="exampleInputTitle" placeholder="Title" value={tittle}
                  onChange={(e) => setTittle(e.target.value)}
                  required={true}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectCategory1">Parent Category</label>
                        <select class="form-control" id="exampleSelectCategory1"  as="select" value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                          <option>select category </option>
                          {categories.map((obj) => (
                    <option value={obj._id}>{obj.categoryName}</option>
                  ))}
                        </select>
                      </div>
                    
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
   
  )
}
