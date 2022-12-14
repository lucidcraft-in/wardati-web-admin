 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers, deleteUser } from '../../../actions/userActions';
import { Link } from 'react-router-dom';

import Loader from '../../../components/Loader';
import Message from '../../../components/Message';

const UserList = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, successDelete, userInfo]);

   const deleteHandler = (id) => {
     if (window.confirm('Are you sure')) {
    dispatch(deleteUser(id));
       //  history.push(`/admin/productlist`);
     }
   };

  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Users</h4>

            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                  </tr>
                </thead>
                {loading ? (
                  <Loader />
                ) : error ? (
                  <Message variant="danger">{error}</Message>
                ) : (
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td class="py-1">{user.name}</td>
                        <td>
                          {' '}
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </td>
                        <td>
                          {' '}
                          {user.isAdmin ? (
                            <i
                              className="mdi mdi-checkbox-marked"
                              style={{ color: 'green', fontSize: '28px' }}
                            ></i>
                          ) : (
                            <i
                              className="mdi mdi-window-close"
                              style={{ color: 'red', fontSize: '28px' }}
                            ></i>
                          )}
                        </td>
                        <td>
                          <div class="d-flex flex-row">
                            <div class="p-2">
                              {' '}
                              <Link to={`/user/edit/${user._id}`}>
                                <button
                                  type="button"
                                  class="btn btn-outline-dark btn-sm"
                                >
                                  Edit
                                </button>
                              </Link>
                            </div>
                            <div class="p-2">
                              {' '}
                              <button
                                type="button"
                                class="btn btn-outline-danger btn-sm"
                                onClick={() => deleteHandler(user._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>{' '}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserList;