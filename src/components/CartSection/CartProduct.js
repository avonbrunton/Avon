const CartProduct = () => {
  return (
    <tr>
      <td class="cart-product-remove">x</td>
      <td class="cart-product-image">
        <a href="product-details.html">
          <img src="img/product/1.png" alt="#" />
        </a>
      </td>
      <td class="cart-product-info">
        <h4>
          <a href="product-details.html">Brake Conversion Kit</a>
        </h4>
      </td>
      <td class="cart-product-price">$149.00</td>
      <td class="cart-product-quantity">
        <div class="cart-plus-minus">
          <input
            type="text"
            value="02"
            name="qtybutton"
            class="cart-plus-minus-box"
          />
        </div>
      </td>
      <td class="cart-product-subtotal">$298.00</td>
    </tr>
  );
};
export default CartProduct;
