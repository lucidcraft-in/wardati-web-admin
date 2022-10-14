import React, { useState } from 'react';

export default function SetStock({ stockIndex, setStockArray, stockArray }) {
    const [index, setIndex] = useState(stockIndex);
  
    const removeItem = () => {
      setStockArray([
        ...stockArray.slice(0, index),
        ...stockArray.slice(index + 1),
      ]);
      };
      
  
      
      const updateData = (value, key) => {
        let newArr = [...stockArray];
        newArr[index][key] = value;
  
        setStockArray(newArr);
      };
  
  
    return (
        <div>
            
        <form controlId="countInStock">
          <label>Size</label>
          <input
            type="text"
            placeholder="Enter Size"
            value={stockArray[index]['size']}
            onChange={(e) => updateData(e.target.value, 'size')}
            required={true}
          ></input>
        </form>
    
       
        <div className="d-flex justify-content-end">
          <a onClick={removeItem}>
            <i aria-hidden="true" className="text-danger fa fa-minus-circle"></i>
          </a>
        </div>
      </div>
    );
  }
  