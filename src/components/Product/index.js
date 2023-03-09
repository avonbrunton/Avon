import SingleProduct from "./SingleProduct";
const ProductArea = () => {
  return (
    <div class="ltn__product-area ltn__product-gutter pt-65 pb-40">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title-area text-center">
              <h1 class="section-title section-title-border">
                new arrival items
              </h1>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
