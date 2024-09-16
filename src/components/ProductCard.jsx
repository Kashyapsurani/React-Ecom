import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ image, name, option1, option2, option3 }) {


  const [price, setPrice] = useState(option1[1]);

  const handleChange = (event) => {
    const selectedOption = event.target.value;

    setPrice(selectedOption)

  };


  function onClicks() {
    const userdata = {
        price : price,
        name : name,
        unit : option1[0]
      }
    
      console.log(userdata)
   
  }
  

  return (
    <>
      <h2>Our Products</h2>
      <br />
      <div className="Main-card">
        <div className="First-card" style={{ padding: 10 }}>
          <img src={image} alt={name} width={"100%"} height={"200px"} />
          <p>{name}</p>
          <p>$ {price}</p>
            
          <select onChange={handleChange}>
            <option value={option1[1,0]}>{option1[0]}</option>
            <option value={option2[1,0]}>{option2[0]}</option>
            <option value={option3[1,0]}>{option3[0]}</option>
          </select>

          <div className="Addtocart">
            <button onClick={onClicks}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
