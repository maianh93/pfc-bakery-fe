import React from "react";
import { Parallax, Background } from "react-parallax";
import MainMenu from "../../components/MainMenu/MainMenu";

import styles from "./Menu.module.css"

const style = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "var(--pink-color)"
  };
  const image1 =
    "/image/cakes_banner.webp";


const Menu = () => (
    <div style={style}>
      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
        <h1>MENU</h1>
        <p className={styles.content}>Ice Creams & Cakes</p>
        </div>
      </div>
    </Parallax>
    <MainMenu />
    </div>
  );
  
  export default Menu