import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'
import FormContainer from '../../../components/FormContainer'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../../actions/categoryActions'
import './Category.css'
import Sidebar from '../Sidebar';

const CategoryCreateScreen = ({ history }) => { 
    const [categoryName, setName] = useState('');
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(0);

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
         
        history.push('/admin/categorylist');
    };
    
    return (
      <div>
        <Sidebar />
        <div className="main">
          <>
            <Link to="/admin/categorylist" className="btn btn-light my-3">
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
              <h1>Create Category</h1>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="categoryName">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category name"
                    value={categoryName}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="priority">
                  <Form.Label>Priority</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <div className="d-flex bd-highlight mb-3">
                  <div className="mr-auto p-2 bd-highlight">
                    {' '}
                    <Button type="submit" variant="primary" className="mt-3">
                      Create
                    </Button>
                  </div>
                </div>
              </Form>
            </FormContainer>
          </>
        </div>
      </div>
    );
}

export default CategoryCreateScreen;