import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../../actions/categoryActions';
import { useNavigate } from 'react-router-dom';
import Axios from '../../../axios/axios';

import Loader from '../../Loader';

export default function CreateCategory({ history }) {
  const [categoryName, setName] = useState('');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { success: categorycreateSuccess } = categoryCreate;
  // console.log(categoryName,'categoryName');
  // console.log(title,'title');
  // console.log(priority,'priority');

  const dispatch = useDispatch();

  useEffect(() => {
    if (categorycreateSuccess) {
      navigate('/category');
    }
  }, [dispatch, categorycreateSuccess]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCategory({
        categoryName,
        title,
        priority,
        image,
      })
    );
  };

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

      setImage(data);

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Create Category</h4>
            <form class="forms-sample" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="exampleInputName">Category Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputName">Category Icon</label>
                <input
                  type="file"
                  class="form-control"
                  onChange={uploadFileHandler}
                  required={true}
                />
              </div>
              <img
                src={
                  image === ''
                    ? process.env.PUBLIC_URL + '/images/select_image.png'
                    : `${image}`
                }
                height="100"
              />
              {uploading && <Loader />}
              <div class="form-group">
                <label for="exampleInputName">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputTitle"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPriority4">Priority</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPriority4"
                  placeholder="Priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                />
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
