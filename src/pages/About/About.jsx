import styles from "./About.module.css"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";



const About = () => {
  return (
    <div>
      <div className={styles.banner}></div>
      <Container>
        <h2 className={styles.title}>Về chúng tôi</h2>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div className={`${styles.box} ${styles.box_image}`}>
            <img src="../image/image-22.jpg" alt="first-about" />
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <h3>Khởi nguồn</h3>
              <p className={styles.sub_title}>
                Thương hiệu bắt nguồn từ cà phê Việt Nam
              </p>
              <p className={styles.paragraph}>
                Coffee Cup được sinh ra từ niềm đam mê bất tận với
                hạt cà phê Việt Nam. Qua một chặng đường dài, chúng
                tôi đã không ngừng mang đến những sản phẩm cà phê
                thơm ngon, sánh đượm trong không gian thoải mái và
                lịch sự với mức giá hợp lý.
              </p>
            </div>
          </div>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >

          <div className={styles.box}>
            <div className={styles.box_content}>
              <h3>Khởi nguồn</h3>
              <p className={styles.sub_title}>
                Thương hiệu bắt nguồn từ cà phê Việt Nam
              </p>
              <p className={styles.paragraph}>
                Coffee Cup được sinh ra từ niềm đam mê bất tận với
                hạt cà phê Việt Nam. Qua một chặng đường dài, chúng
                tôi đã không ngừng mang đến những sản phẩm cà phê
                thơm ngon, sánh đượm trong không gian thoải mái và
                lịch sự với mức giá hợp lý.
              </p>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box_image}`}>
            <img src="../image/image-22.jpg" alt="first-about" />
          </div>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div className={`${styles.box} ${styles.box_image}`}>
            <img src="../image/image-22.jpg" alt="first-about" />
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <h3>Khởi nguồn</h3>
              <p className={styles.sub_title}>
                Thương hiệu bắt nguồn từ cà phê Việt Nam
              </p>
              <p className={styles.paragraph}>
                Coffee Cup được sinh ra từ niềm đam mê bất tận với
                hạt cà phê Việt Nam. Qua một chặng đường dài, chúng
                tôi đã không ngừng mang đến những sản phẩm cà phê
                thơm ngon, sánh đượm trong không gian thoải mái và
                lịch sự với mức giá hợp lý.
              </p>
            </div>
          </div>
        </Stack>
      </Container>
    </div>

  );
};

export default About;