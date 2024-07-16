import React from 'react';
import { useParams } from 'react-router-dom';

function ProductInfo() {
  const { productSku } = useParams();

  // Fetch product details based on productSku or pass down product details via props

  return (
    <div>
      <h1>Product Information</h1>
      <p>Product SKU: {productSku}</p>
      {/* Your product information code goes here */}
    </div>
  );
}

export default ProductInfo;
