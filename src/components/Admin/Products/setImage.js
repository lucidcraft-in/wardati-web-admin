import React, { useState } from 'react';
import Axios from '../../../axios/axios';
import Loader from '../../Loader';
export default function SetImage({ imageIndex, setImagesArray, imagesArray }) {
  const [uploading, setUploading] = useState(false);
  const [index, setIndex] = useState(imageIndex);

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
      console.log("check upload form data",formData);
      const { data } = await Axios.post('/api/upload', formData, config);

      updateData(data, 'url');

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const removeItem = () => {
    setImagesArray([
      ...imagesArray.slice(0, index),
      ...imagesArray.slice(index + 1),
    ]);
  };

  const updateData = (value, key) => {
    let newArr = [...imagesArray];
    newArr[index][key] = value;

    setImagesArray(newArr);
  };

  return (
    <div>
      {' '}
     <form id="image">
        <label>Upload Image</label>
        <input
          type="file"
          id="image-file"
          class="file-upload-default"
          name="img[]"
          // required={imagesArray[index]['url'] ? false : true}
          onChange={uploadFileHandler}
        />
        <div class="input-group col-xs-12">
          <input
            type="text"
            class="form-control file-upload-info"
            disabled
            placeholder="Upload Image"
          />
          <span class="input-group-append">
            <button class="file-upload-browse btn btn-primary" type="button">
              Upload
            </button>
          </span>
        </div>
      {/* </div> */}
      {/* <form class="forms-sample" id="image"> */}
        {/* <label>Image</label> */}

        <img src={imagesArray[index]['url']} height="100" />
        {/* <input type="file"  id="image-file" class="file-upload-default" name="img[]" required={imagesArray[index]['url'] ? false : true}
          onChange={uploadFileHandler} /> */}

        {uploading && <Loader />}

        {/* <label>Price</label>
        <input
          type="text"
          placeholder="Enter price"
          value={imagesArray[index]['price']}
          onChange={(e) => updateData(e.target.value, 'price')}
        /> */}

        {uploading && <Loader />}
      {/* </form> */}
      <div className="d-flex justify-content-end">
        <a onClick={removeItem}>
          <i aria-hidden="true" className="text-danger fa fa-minus-circle"></i>
        </a>
      </div>
      </form>
    </div>
  );
}
