import React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from "./HomeAbout.module.css"
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const style = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "/image/home/about.jpg";

const SubHomeAbout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <img src="/image/home/footer-slider/image-21.jpg" alt="ice-cream-home-menu" />
        </Grid>
        <Grid item xs={6}>
          <p className={styles.content}>Triết lý kinh doanh</p>
          <h3 className={styles.title}>Về chúng tôi</h3>
          <MoreHorizOutlinedIcon/>
          <p className={styles.p_about}>Bán kem nhất định phải bắt đầu bán vào mùa đông, bởi mùa đông khách hàng ít, buộc bạn phải giảm chi phí để cải thiện dịch vụ.</p>
          <p className={styles.p_about}>Nếu như có thể tồn tại được trong mùa đông, thì không sợ không cạnh tranh được vào mùa hè.</p>
          <p className={styles.p_about}>Nếu muốn trong hoàn cảnh tốt, sự nghiệp có thể phát triển không ngừng, thì nhất định phải được tôi luyện trong những hoàn cảnh khó khăn.</p> 
         <Link to="/about">
         <Button 
          title={"Chi tiết"}
         />
         </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

const HomeAbout = () => (
  <div style={style}>
    <Parallax bgImage={image1} strength={100}>
      <div style={{ height: 700 }}>
        <div style={insideStyles}>
          <SubHomeAbout />
        </div>
      </div>
    </Parallax>
  </div>
);

export default HomeAbout
