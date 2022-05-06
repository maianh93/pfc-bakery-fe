import styles from "./CartList.module.css"
const numberFormater = new Intl.NumberFormat('de-DE');

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
            <h4 className={styles.total_price}>{numberFormater.format(totalPrice.toFixed(2))}đ</h4>
          </div>
          <button style={{marginRight: "20px"}}>TIẾP TỤC MUA HÀNG</button>
          <button onClick={props.clearList}>THANH TOÁN</button>
        </div>
      </div>
    );
  };

  export default CartFooter