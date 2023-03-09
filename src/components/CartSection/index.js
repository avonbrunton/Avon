import CartProduct from "./CartProduct";
const CardSection = () => {
  return (
    <div class="liton__shoping-cart-area mb-100 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title-area text-center">
              <h1>Cart</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="shoping-cart-inner">
              <div class="shoping-cart-table table-responsive">
                <table class="table">
                  <tbody>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                  </tbody>
                </table>
              </div>
              <div class="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>$618.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>$15.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$00.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>$633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="btn-wrapper text-right">
                  <a href="checkout.html" class="theme-btn-1 btn btn-effect-1">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
