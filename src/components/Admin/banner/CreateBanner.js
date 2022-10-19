import React, { useState , useEffect} from 'react';
import Axios from '../../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  listCategories,
  
} from '../../../actions/categoryActions';

import { createBanner } from '../../../actions/bannerActions';

const CreateBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [bannerPosition, setBannerPosition] = useState();
  
    const categoryList = useSelector((state) => state.categoryList);
    const { loading, error, categories } = categoryList;


  useEffect(() => {
    dispatch(listCategories(''));
  }, [])
  

 const uploadFileHandler = async (e) => {
   const file = e.target.files[0];
   const formData = new FormData();
   formData.append('image', file);
   setUploading(true);

   try {
     const config = {
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     };

     const { data } = await Axios.post('/api/upload', formData, config);

     setImage(data.path);

     setUploading(false);
   } catch (error) {
     console.error(error);
     setUploading(false);
   }
  };
  

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createBanner({
        image,
        title,
        description,
        category,
        bannerPosition,
      })
    );
    navigate('/lz-admin/banners');
  };

  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create Banner</h4>
            <form class="forms-sample" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="exampleInputName">Upload Image</label>
                <select
                  class="form-control"
                  onChange={(e) => setBannerPosition(e.target.value)}
                >
                  <option value="">Select Banner Position</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputName">Upload Image</label>
                <input
                  type="file"
                  class="form-control"
                  onChange={uploadFileHandler}
                  required={true}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputName">Title</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPriority4">Description</label>

                <textarea
                  rows="5"
                  class="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleSelectCategory">Link to</label>
                <select
                  class="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                  required={true}
                >
                  <option>Select Category</option>
                  {categories.map((obj) => (
                    <option value={obj._id} key={obj._id}>
                      {obj.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" class="btn btn-primary mr-2">
                Submit
              </button>
              <button class="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBanner;
