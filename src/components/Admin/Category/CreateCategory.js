import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createCategory} from '../../../actions/categoryActions'
import { useNavigate } from "react-router-dom";


export default function CreateCategory({ history }) {
  const [categoryName, setName] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);
    const navigate = useNavigate();

    // console.log(categoryName,'categoryName');
    // console.log(title,'title');
    // console.log(priority,'priority');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCategory({
        categoryName,
        title,
        priority,
      })
    );
     
    navigate('/admin/category');
};

  return (
    <div class="main-panel">        
    <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Create Category</h4>
                <form class="forms-sample" onSubmit={submitHandler}>
                    
                    
                      <div class="form-group">
                      <label for="exampleInputName">Category Name</label>
                      <input type="text" class="form-control" id="exampleInputName" placeholder="Category Name" value={categoryName}
                             onChange={(e) => setName(e.target.value)}
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
      </div>
      </div>
  )
}
