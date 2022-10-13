import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../../components/FormContainer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SUB_CATEGORY_UPDATE_RESET } from '../../../constants/subCategoryConstant';
import {
  listSubCategoryDetails,
  updateSubCategory,
} from '../../../actions/subcategoryAction';
import { listCategories } from '../../../actions/categoryActions';
import Sidebar from '../Sidebar';

const SubCategoryEdit = ({ history, match }) => {
  const subCategoryId = match.params.id;
  
  const [name, setName] = useState('');
  const [tittle, setTittle] = useState('');
  const [category, setCategory] = useState('weert');

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
      history.push('/admin/subcategories');
    } else {
      if (!subCategory.name || subCategory._id !== subCategoryId) {
        
        dispatch(listSubCategoryDetails(subCategoryId));
         dispatch(listCategories(''));
      } else {
        
        setName(subCategory.name);
        setTittle(subCategory.tittle);
        setCategory(subCategory.category);
      }
    }
     
  }, [dispatch, history, subCategoryId, subCategory, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(
       updateSubCategory({
         _id: subCategoryId,
         name,
         tittle,
         category,
       })
     );

    history.push('/admin/subcategories');
  };

 

  return (
    <div>
      <Sidebar />
      <div className="main">
        <>
          <Link to="/admin/subcategories" className="btn btn-light my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>

          <FormContainer>
            <h1>Create Sub category</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="tittle">
                <Form.Label>Tittle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Tittle"
                  value={tittle}
                  onChange={(e) => setTittle(e.target.value)}
                  required={true}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="category">
                <Form.Label>Parent Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select Category</option>
                  {categories.map((obj) => (
                    <option value={obj._id} key={obj._id}>
                      {obj.categoryName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <div className="d-flex bd-highlight mb-3">
                <div className="mr-auto p-2 bd-highlight">
                  {' '}
                  <Button type="submit" variant="primary" className="mt-3">
                    Update
                  </Button>
                </div>
              </div>
            </Form>
          </FormContainer>
        </>
        ;
      </div>
    </div>
  );
};


export default SubCategoryEdit