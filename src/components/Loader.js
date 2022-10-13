import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.css';

const Loader = () => {
  return (
    // <Spinner
    //   animation="border"
    //   role="status"
    //   variant="danger"
    //   style={{
    //     width: '50px',
    //     height: '50px',
    //     margin: 'auto',
    //     display: 'block',
    //   }}
    // >
    //   <span className="sr-only">Loading...</span>
    // </Spinner>
    <div className="d-flex justify-content-center">
      <div className="loadingio-spinner-spinner-7wthsg4wcj9">
        <div className="ldio-e73ojg3a1m">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loader
