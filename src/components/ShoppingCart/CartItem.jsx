import styles from "./CartList.module.css"
import { Icon } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const CartItem = (props) => {
    // {name, price, image}
    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_content}>
                <div className={styles.cart_image}>
                    <img className={styles.cart_item_image} src={props.image} alt={props.name} />
                </div>
                <div className={styles.cart_info}>
                    <h4>{props.name}</h4>
                    <p>${props.price}</p>
                    <span className={styles.cart_remove} onClick={() => props.deleteItem(props.id)}>remove</span>
                </div>
            </div>

            <div className={styles.cart_quantity}>
                <KeyboardArrowUpOutlinedIcon className="cursor" onClick={() => props.handleChangeQuantity(props.id, "increase")} />
                <span>{props.quantity}</span>
                <KeyboardArrowDownOutlinedIcon className="cursor" onClick={() => props.handleChangeQuantity(props.id, "decrease")} />

            </div>
        </div>
    );
};

export default CartItem