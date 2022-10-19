import {
  BANNER_LIST_REQUEST,
  BANNER_LIST_SUCCESS,
  BANNER_LIST_FAIL,
  BANNER_CREATE_REQUEST,
  BANNER_CREATE_SUCCESS,
  BANNER_CREATE_FAIL,
  BANNER_CREATE_RESET,
  BANNER_DELETE_REQUEST,
  BANNER_DELETE_SUCCESS,
  BANNER_DELETE_FAIL,
} from '../constants/bannerConstant';

  export const bannerListReducer = (state = { banners: [] }, action) => {
    switch (action.type) {
      case BANNER_LIST_REQUEST:
        return { loading: true, banners: [] };
      case BANNER_LIST_SUCCESS:
        return {
          loading: false,
          banners: action.payload.data,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case BANNER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};
  

  export const bannerCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case BANNER_CREATE_REQUEST:
        return { loading: true };
      case BANNER_CREATE_SUCCESS:
        return { loading: false, success: true, banner: action.payload };
      case BANNER_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case BANNER_CREATE_RESET:
        return {};
      default:
        return state;
    }
};
  
 export const bannerDeleteReducer = (state = {}, action) => {
   switch (action.type) {
     case BANNER_DELETE_REQUEST:
       return { loading: true };
     case BANNER_DELETE_SUCCESS:
       return { loading: false, success: true };
     case BANNER_DELETE_FAIL:
       return { loading: false, error: action.payload };
     default:
       return state;
   }
 };
  