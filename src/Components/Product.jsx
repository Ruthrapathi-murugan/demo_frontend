
import PropTypes from 'prop-types';


function Product({
  name,
  sku,
  images,
  price,
  description,
  availableQty,
  category,
  sellerInfo
}) {
  return (
    <div className="card mb-4">
      <div id={`carousel-${sku}`} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              data-target={`#carousel-${sku}`}
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Product image ${index + 1}`} />
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href={`#carousel-${sku}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carousel-${sku}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">SKU: {sku}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Category: <span class="badge text-bg-secondary">{category}</span></h6>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>Price: </strong>${price}</p>
        <p className="card-text"><strong>Available Quantity: </strong>{availableQty}</p>
        <p className="card-text"><strong>Seller Information: </strong>{sellerInfo}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  availableQty: PropTypes.number.isRequired,
  category: PropTypes.oneOf(['electronics', 'sports', 'fashion']).isRequired,
  sellerInfo: PropTypes.string.isRequired,
};

export default Product;
