import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import SetImage from './setImage';
import SetStock from './setStock';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate ,useParams } from "react-router-dom";
import {

  createProduct,
  updateProduct,
  listProductDetails
} from '../../../actions/productActions';
import { listCategories, createCategory, deleteCategory } from "../../../actions/categoryActions";
import {
  listSubCategories
} from '../../../actions/subcategoryAction';
import { PRODUCT_UPDATE_RESET } from '../../../constants/productConstants';
 

export default function EditProduct({  history }) {
  const {  id } = useParams();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [subCategory, setSubCategory] = useState([]);
  const [promotionPercentage, setPromotionCodePercentage] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(' ');
  const categoryList = useSelector((state) => state.categoryList)
  const { categories } = categoryList;
  const subCategoryList = useSelector((state) => state.subCategoryList);
   const { subCategories } = subCategoryList;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
  
    dispatch(
      updateProduct({
        name,
        // imagesArray,
        brand,
        category,
        selectedSubCategory,
        description,
        countInStock,
        promotionPercentage,
      })
    );
     navigate('/lz-admin/products');
   
  };
   
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      navigate('/admin/products');
    } else {
      if (!product.name || product._id !== id) {
        dispatch(listProductDetails(id));
        dispatch(listCategories(''));
          dispatch(listSubCategories(''));
      } else {
          
        setName(product.name);
        // setPrice(product.price);
        // setSellingPrice(product.sellingPrice);
        // setImage(product.image)
        setBrand(product.brand);
        setCategory(product.category);
        setSelectedSubCategory(product.subcategory);
        setCountInStock(product.countInStock);
        // setStockArray(product.stock);
        setDescription(product.description);
        // setImagesArray(product.images);
        setPromotionCodePercentage(product.promotionPercentage);
      }
    }
  }, [dispatch, history, id, product, successUpdate]);

  const changeCategory = (value) => {
    setCategory(value);

   console.log(subCategories);

    let list = subCategories.filter((e) => e.category === value);
    
    setSubCategory(list)
  }

  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Edit Product</h4>
            <form class="forms-sample" onSubmit={submitHandler} >
              <div class="form-group">
                <label for="exampleInputName1">Name</label>

                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  placeholder="Name"
                />
              </div>
            
             
              <div class="form-group">
                <label for="exampleInputCity1">Brand Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required={true}
                  placeholder="Brand"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPromotion4">
                  Promotion Offer Percentage
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter Promotion Offer Percentage"
                  value={promotionPercentage}
                  onChange={(e) => setPromotionCodePercentage(e.target.value)}
                  required={true}
                />
              </div>
              <div class="form-group">
                <label for="exampleSelectCategory">Category</label>
                <select
                  class="form-control"
                  onChange={(e) => changeCategory(e.target.value)}
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
              <div class="form-group">
                <label for="exampleSelectCategory">Sub Category</label>
                <select
                  class="form-control"
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  required={true}
                  value={subCategory}
                >
                  <option>Select Sub Category</option>
                  {subCategory.map((obj) => (
                    <option value={obj._id} key={obj._id}>
                      {obj.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="exampleTextarea1">Description</label>
                <textarea
                  class="form-control"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required={true}
                ></textarea>
              </div>
              <hr />
            

              {/* <div class="d-flex">
                <div class="p-2"> </div>
                <div class="p-2"> </div>
                <div class="ml-auto p-2">
                  {' '}
                  <a onClick={addImage} className="pointer">
                    {' '}
                    <i class="icon-plus menu-icon"></i>
                    Add image
                  </a>
                </div>
              </div> */}

             
              <div class="form-check">
                <label>
                  <input
                    type="checkbox"
                    style={{ width: '22px', height: '22px' }}
                   
                  />
                  &nbsp;&nbsp; Is Trending
                </label>
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
  )
}
