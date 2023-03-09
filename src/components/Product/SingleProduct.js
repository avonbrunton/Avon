import { Link } from "react-router-dom";
import Product from "../../assets/img/product/1.jpg";
const SingleProduct = () => {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
      <div class="ltn__product-item text-center">
        <div class="product-img">
          <Link to="/">
            <img src={Product} alt="#" />
          </Link>
          <div class="product-badge">
            <ul>
              <li class="badge-2">10%</li>
            </ul>
          </div>
          <div class="product-hover-action product-hover-action-2">
            <ul>
              <li>
                <Link to="/">
                  <i class="icon-magnifier"></i>
                </Link>
              </li>
              <li class="add-to-cart">
                <Link to="/">
                  <span class="cart-text d-none d-xl-block">Add to Cart</span>
                  <span class="d-block d-xl-none">
                    <i class="icon-handbag"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="icon-shuffle"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-info">
          <h2 class="product-title">
            <Link to="/">Pink Flower Tree</Link>
          </h2>
          <div class="product-price">
            <span>$18.00</span>
            <del>$21.00</del>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
