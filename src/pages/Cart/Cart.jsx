import React from "react";
import { Parallax, Background } from "react-parallax";
import { useState } from "react";

import CartList from "../../components/ShoppingCart/CartList";
import CartFooter from "../../components/ShoppingCart/CartFooter";



const numberFormater = new Intl.NumberFormat('de-DE');

const style = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "/image/home/promotion/promotion-background.jpg";

const carts = [
  {
    product: {
      id: 1,
      name: "Caramel Rolo Cake",
      price: 550000,
      image:
        "/image/detail-menu/cake/caramel-rolo-cake/1.webp",
    },
    quantity: 1,
  },
  {
    product: {
      id: 1,
      name: "Caramel Rolo Cake",
      price: 550000,
      image:
        "/image/detail-menu/cake/caramel-rolo-cake/1.webp",
    },
    quantity: 1,
  },
  {
    product: {
      id: 1,
      name: "Caramel Rolo Cake",
      price: 550000,
      image:
        "/image/detail-menu/cake/caramel-rolo-cake/1.webp",
    },
    quantity: 1,
  },
  {
    product: {
      id: 1,
      name: "Caramel Rolo Cake",
      price: 550000,
      image:
        "/image/detail-menu/cake/caramel-rolo-cake/1.webp",
    },
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [state, setState] = useState(carts);
  console.log(state);

  const handleChangeQuantity = (id, type) => {
    let newList = [...state];
    const index = state.findIndex((item) => item.product.id == id);
    if (type == "increase") {
      let newItem = {
        ...newList[index],
        quantity: newList[index].quantity + 1,
      };
      newList.splice(index, 1, newItem);
      setState(newList);
    } else {
      if (newList[index].quantity == 1) return;
      let newItem = {
        ...newList[index],
        quantity: newList[index].quantity - 1,
      };
      newList.splice(index, 1, newItem);
      setState(newList);
    }
  };

  const deleteItem = (id) => {
    const index = state.findIndex((item) => item.product.id == id);
    let newList = [...state];
    newList.splice(index, 1);
    setState(newList);
  };

  const clearList = () => {
    if (confirm("Bạn có muốn xóa tất cả sản phẩm không ?")) {
      setState([]);
    }
  };
  return (
      <div style={style}>
    <Parallax bgImage={image1} strength={500}>
      <h1>Giỏ hàng của bạn</h1>
      <div style={{ height: 800 }}>
        <div style={insideStyles}>
          <CartList 
           carts={state}
           handleChangeQuantity={handleChangeQuantity}
           deleteItem={deleteItem}
          />
          <CartFooter 
          data={state} clearList={clearList} 
          />
        </div>
      </div>
    </Parallax>
  </div>
  )
};

export default ShoppingCart
