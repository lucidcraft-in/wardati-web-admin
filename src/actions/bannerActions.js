import Axios from '../axios/axios';
import {
  BANNER_LIST_REQUEST,
  BANNER_LIST_SUCCESS,
  BANNER_LIST_FAIL,
  BANNER_CREATE_REQUEST,
  BANNER_CREATE_SUCCESS,
  BANNER_CREATE_FAIL,
  BANNER_DELETE_REQUEST,
  BANNER_DELETE_SUCCESS,
  BANNER_DELETE_FAIL,
  BANNER_DETAILS_REQUEST,
  BANNER_DETAILS_SUCCESS,
  BANNER_DETAILS_FAIL,
  BANNER_UPDATE_REQUEST,
  BANNER_UPDATE_SUCCESS,
  BANNER_UPDATE_FAIL,
} from '../constants/bannerConstant.js';
import { logout } from './userActions';


export const listBanners = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER_LIST_REQUEST });

    const { data } = await Axios.get(`/api/banner/`);
  console.log(data, 'data');
    dispatch({
      type: BANNER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BANNER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const bannerListDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BANNER_DETAILS_REQUEST });

    const { data } = await Axios.get(`/api/banner/${id}`);

    dispatch({
      type: BANNER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BANNER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createBanner = (banner) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BANNER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.post(`/api/banner`, banner, config);

    dispatch({
      type: BANNER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: BANNER_CREATE_FAIL,
      payload: message,
    });
  }
};
export const updateBanner = (banner) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BANNER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await Axios.put(
      `/api/banner/${banner._id}`,
      banner,
      config
    );

    dispatch({
      type: BANNER_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: BANNER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: BANNER_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const deleteBanner = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BANNER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await Axios.delete(`/api/banner/${id}`, config);

    dispatch({
      type: BANNER_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: BANNER_DELETE_FAIL,
      payload: message,
    });
  }
};
  