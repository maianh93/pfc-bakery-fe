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
              <h3>Thuở sơ khai</h3>
              <p className={styles.sub_title}>
                “Chúng tôi mang đến bạn không chỉ kem mà còn là niềm vui”
              </p>
              <p className={styles.paragraph}>
              Gần 2 năm trước, có một người trong mình giấc mơ sẽ cho ra đời một quán kem- nơi mà mọi người đều có thể thưởng thức từng muỗng kem mát lạnh và quây quần bên nhau thật ấm áp. Bà Phùng Mai Anh, người có một niềm yêu thích chung dành cho các loại kem cổ điển cùng với niềm khát khao mang đến cho khách hàng niềm vui khi được nếm những viên kem đạt chất lượng cao nhất, và Pluto Ice Cream ra đời.
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
              <h3>Phát triển và thách thức</h3>
              <p className={styles.sub_title}>
                "Mùa đông đầu tiên"
              </p>
              <p className={styles.paragraph}>
                Pluto Ice Creams dường như khá điêu đứng trong mùa đông đầu tiên, khi lượng khách thực sự không nhiều. Chính lúc đó, Pluto Ice Creams đã tìm thấy một hướng đi song hành cùng với thương hiệu, đó là Bakery. Nếu như có thể tồn tại được trong mùa đông, thì sẽ không sợ không cạnh tranh được vào mùa hè. Nếu muốn trong hoàn cảnh tốt, sự nghiệp có thể phát triển không ngừng, thì nhất định phải được tôi luyện trong những hoàn cảnh khó khăn.
              </p>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box_image}`}>
            <img src="../image/login.webp" alt="first-about" />
          </div>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div className={`${styles.box} ${styles.box_image}`}>
            <img src="../image/detail-menu/ice-cream/strawberry-ice-cream.jpg" alt="first-about" />
          </div>
          <div className={styles.box}>
            <div className={styles.box_content}>
              <h3>Vươn tới những tầm cao</h3>
              <p className={styles.sub_title}>
                "Bất kể già hay trẻ, mọi người đều đến Pluto với sự mong đợi niềm vui sẽ đến từ viên kem và bánh ngọt mà họ yêu thích"
              </p>
              <p className={styles.paragraph}>
              Trong cuộc sống chúng ta, niềm vui được tạo nên từ vô vàn hình thái khác nhau. Có những niềm vui đến một cách rất bình dị và giản đơn, có lúc niềm vui lại đến từ sự mong đợi. Đó cũng có thể là những khoảnh khắc hạnh phúc tồn tại lâu dài, và đôi khi, niềm vui cần một chút gì đó thôi thúc trong ta để cảm nhận được.  Đối với các bạn bè ở khắp mọi nơi, kem và bánh ngọt cũng có thể đem lại những niềm vui khác nhau.
              </p>
              <p className={styles.paragraph}>Hãy để Pluto Ice Creams & Cakes được phục vụ bạn theo cách mà bạn mong muốn!</p>
            </div>
          </div>
        </Stack>
      </Container>
    </div>

  );
};

export default About;