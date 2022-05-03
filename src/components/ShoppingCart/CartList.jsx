import { style } from '@mui/system';
import CartItem from './CartItem.jsx';
import styles from "./CartList.module.css"

const CartList = (props) => {
    return (
      <div className={styles.cart}>
        <div className={styles.width}>
          {props.carts.map((cartItem) => {
            return (
              <CartItem
                name={cartItem.product.name}
                image={cartItem.product.image}
                price={cartItem.product.price}
                quantity={cartItem.quantity}
                key={cartItem.product.id}
                id={cartItem.product.id}
                handleChangeQuantity={props.handleChangeQuantity}
                deleteItem={props.deleteItem}
              />
            );
          })}
        </div>
      </div>
    );
  };

  export default CartList