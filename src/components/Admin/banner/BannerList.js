import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { listBanners, deleteBanner } from '../../../actions/bannerActions';

const BannerList = ({ history }) => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const bannerList = useSelector((state) => state.bannerList);
    console.log(bannerList,'bannerList')
  const { loading, error, banners } = bannerList;
    const bannerDelete = useSelector((state) => state.bannerDelete);

    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = bannerDelete;
  
    const bannerCreate = useSelector((state) => state.bannerCreate);
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      category: createBanner,
    } = bannerCreate;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/lz-admin/banner/edit/${createBanner._id}`);
    } else {
      
      dispatch(listBanners(''));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createBanner,
    
  ]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteBanner(id));
    }
  };

console.log(bannerList,'hiiiiiiiiii');
  return (
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Banners</h4>
            <div class="float-right">
              <Link
                class="nav-link"
                data-toggle="collapse"
                to="/lz-admin/banner/create"
                aria-expanded="false"
                aria-controls="charts"
              >
                {' '}
                <button type="button" class="btn btn-primary btn-md btn-block">
                  <i class="icon-plus menu-icon"></i>
                  Add Banner
                </button>
              </Link>
            </div>

            <div className="row">
              <div class="row py-5">
              
                <div class="col-lg-4">
                  <figure class="rounded p-3 bg-white shadow-sm">
                    <img
                      src="https://i.postimg.cc/CxckQJW1/6.png"
                      alt=""
                      class="w-100 card-img-top"
                    />
                    <figcaption class="p-4 card-img-bottom">
                      <h2 class="h5 font-weight-bold mb-2 font-italic">
                        Image Caption
                      </h2>
                      <p class="mb-0 text-small text-muted font-italic">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                    </figcaption>
                    <div class="d-flex flex-row">
                      <div class="p-2">
                        {' '}
                        {/* <Link to={`/lz-admin/stock/edit/${stock._id}`}> */}
                        <button
                          type="button"
                          class="btn btn-outline-dark btn-sm"
                        >
                          Edit
                        </button>
                        {/* </Link> */}
                      </div>
                      <div class="p-2">
                        {' '}
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          // onClick={() => deleteHandler(stock._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerList;
