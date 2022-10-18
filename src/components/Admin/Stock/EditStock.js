import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  listStockDetails,
  updateStock
} from '../../../actions/stockAction';

export default function EditStock({ match, history }) {

  const {  id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  
  const [sizeList, setSizeList] = useState([]);

  return (
    <div>

    </div>
  )
}
