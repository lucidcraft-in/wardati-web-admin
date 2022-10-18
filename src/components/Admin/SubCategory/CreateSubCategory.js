import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSubCategory } from '../../../actions/subcategoryAction';
import {
  listCategories,
} from '../../../actions/categoryActions';

export default function CreateSubCategory() {
  const [name, setName] = useState('');
  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { loading, error, categories } = categoryList;

 
  useEffect(() => {
    dispatch(listCategories(''));
  }, []);
  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createSubCategory({
        name,
        tittle,
        category,
      })
    );

    navigate('/lz-admin/subcategory');
  };
  return (
   
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create SubCategory</h4>
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
                        <select class="form-control" id="exampleSelectCategory1"  as="select"
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
