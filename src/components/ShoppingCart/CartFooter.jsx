import styles from "./CartList.module.css"

const CartFooter = (props) => {
    // props.data
  
    let totalPrice = 0;
    props.data.map((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return (
      <div className={styles.width}>
        <div className={styles.cart_footer}>
          <div className={styles.cart_footer_total}>
            <h4>Total</h4>
            <h4 className={styles.total_price}>${totalPrice.toFixed(2)}</h4>
          </div>
          <button onClick={props.clearList}>CLEAR CART</button>
        </div>
      </div>
    );
  };

  export default CartFooter