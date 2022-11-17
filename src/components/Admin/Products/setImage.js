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

    console.log(newArr, 'newArr');
    setImagesArray(newArr);
  };

 

  return (
    <div>
      {' '}
      <form id="image">
        <label>Upload Image</label>
        <br />
        <input
          type="file"
          id="image-file"
          class="file-upload-default"
          name="img[]"
          // required={imagesArray[index]['url'] ? false : true}
          onChange={uploadFileHandler}
        />

        <img
          src={
            imagesArray[index].url === ''
              ? process.env.PUBLIC_URL + '/images/select_image.png'
              : `${imagesArray[index].url}`
          }
          height="100"
        />

        {uploading && <Loader />}

        <div className="d-flex justify-content-end">
          <a onClick={removeItem}>
            <i
              aria-hidden="true"
              className="text-danger fa fa-minus-circle"
            ></i>
          </a>
        </div>
      </form>
    </div>
  );
}
