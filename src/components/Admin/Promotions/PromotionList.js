import React, { useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  listPromotions,
  deletePromotion,
  createPromotion,
} from '../../../actions/promotionAction';
import { PROMOTION_CREATE_RESET } from '../../../constants/promotionConstant';


export default function PromotionList({ history, match }) {

   const pageNumber =  1;

  const dispatch = useDispatch();
  
    const promotionList = useSelector((state) => state.promotionList);
  const { loading, error, promotions, page, pages } = promotionList;
  
  console.log(promotions,'promotions')
  const promotionDelete = useSelector((state) => state.promotionDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = promotionDelete;

  const promotionCreate = useSelector((state) => state.promotionCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    promotion: createdPromotion,
  } = promotionCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 

  useEffect(() => {
    dispatch({ type: PROMOTION_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }

    if (successCreate) {
      dispatch(listPromotions('',pageNumber));
    } else {
      dispatch(listPromotions('',pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdPromotion,
    pageNumber
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deletePromotion(id));
    }
  };

  const createPromotionHandler = () => {
    dispatch(createPromotion());
  };

 


  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Promotions</h4>
            <div class="float-right">
              <Link
                class="nav-link"
                data-toggle="collapse"
                to="/lz-admin/promotion/create"
                aria-expanded="false"
                aria-controls="charts"
              >
                {' '}
                <button type="button" class="btn btn-primary btn-md btn-block">
                  <i class="icon-plus menu-icon"></i>
                  Add Promotions
                </button>
              </Link>
            </div>

            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>PHONE</th>
                    <th>PROMO CODE</th>
                  </tr>
                </thead>
                <tbody>
                  {promotions.map((promotion) => (
                    <tr key={promotion._id}>
                      <td>{promotion.name}</td>
                      <td> {promotion.phone}</td>
                      <td>{promotion.code}</td>
                      <td>
                        <div class="d-flex flex-row">
                          <div class="p-2">
                            {' '}
                            <Link
                              to={`/lz-admin/promotion/edit/${promotion._id}`}
                            >
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
                              onClick={() => deleteHandler(promotion._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>

                      {/* <td>
                          <LinkContainer
                            to={`/admin/promotion/edit/${promotion._id}`}
                          >
                            <Button variant="light" className="btn-sm">
                              <i className="fas fa-edit"></i>
                            </Button>
                          </LinkContainer>
                          <Button
                            variant="danger"
                            className="btn-sm"
                            onClick={() => deleteHandler(promotion._id)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
