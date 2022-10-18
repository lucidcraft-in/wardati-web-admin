import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { USER_UPDATE_RESET } from '../../../constants/userConstants';
import { getUserDetails, updateUser } from '../../../actions/userActions';

const EditUser = ({ match, history }) => {
const {  id } = useParams();
  // const userId = match.params.id;
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
  } = userUpdate;
  
    useEffect(() => {
      if (successUpdate) {
        dispatch({ type: USER_UPDATE_RESET });
        history.push('/admin/userlist');
      } else {
        if (!user.name || user._id !== id) {
          dispatch(getUserDetails(id));
        } else {
          setName(user.name);
          setEmail(user.email);
          setIsAdmin(user.isAdmin);
        }
      }
    }, [dispatch, history, id, user, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: id, name, email, isAdmin }));
      navigate('/admin/users');
  };


   
  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Edit User</h4>
            <form class="forms-sample" onSubmit={submitHandler}>
              <div class="form-group">
                <label for="exampleInputName1"> Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=" Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputName">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div class="form-check">
                <label>
                  <input
                    type="checkbox"
                    style={{ width: '22px', height: '22px' }}
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                  &nbsp;&nbsp; Is Admin
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
  );
};

export default EditUser;
