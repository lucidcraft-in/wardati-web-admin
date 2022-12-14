import React, { useState, useEffect } from 'react';
import Axios from '../../../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  bannerListDetails,
  updateBanner,
} from '../../../actions/bannerActions';
import { useNavigate, useParams } from 'react-router-dom';
import { listCategories } from '../../../actions/categoryActions';
import { BANNER_UPDATE_RESET } from '../../../constants/bannerConstant';



const EditBanner = () => {
  
 const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [bannerPosition, setBannerPosition] = useState();

    const bannerDetails = useSelector((state) => state.bannerDetails);
  const { loading, error, banner } = bannerDetails;

   const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;
  
    const bannerUpdate = useSelector((state) => state.bannerUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = bannerUpdate;
  
 
 
  
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BANNER_UPDATE_RESET });
      navigate('/banners');
    } else {
      if (!banner.title || banner._id !== id) {
       
        dispatch(bannerListDetails(id));
         dispatch(listCategories(''));
      } else {
       setCategory(banner.category);
        setDescription(banner.description);
        setTitle(banner.title);
        setImage(banner.image);
        setBannerPosition(banner.bannerPosition);
      }
    }
  }, [dispatch, id, banner, successUpdate]);

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

   const submitHandler = (e) => {
     e.preventDefault();

     dispatch(
       updateBanner({
         _id: id,
         image,
         title,
         description,
         category,
         bannerPosition,
       })
     );
     navigate('/banners');
   };

  

  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Edit Banner</h4>
            <form class="forms-sample" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="exampleInputName">Banner position</label>
                <select
                  class="form-control"
                  onChange={(e) => setBannerPosition(e.target.value)}
                  value={bannerPosition}
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
                  value={category}
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

export default EditBanner;
