import React from "react";
import { Parallax, Background } from "react-parallax";
import MainMenu from "../../components/MainMenu/MainMenu";

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


const Menu = () => (
    <div style={style}>
      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <MainMenu />
    </div>
  );
  
  export default Menu