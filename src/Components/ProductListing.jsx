import React, { useEffect, useState } from 'react';

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '100px',
  };

  const productItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    width: '200px',
  };

  const productImageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div style={productListStyle}>
        {products.map(product => (
          <div key={product.id} style={productItemStyle}>
            <img src={product.image} alt={product.name} style={productImageStyle} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>SKU: {product.sku}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
