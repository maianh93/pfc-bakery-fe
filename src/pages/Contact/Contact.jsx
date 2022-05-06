import styles from "./Contact.module.css"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Container } from "@mui/material";



const Contact = () => {
  return (
    <div>
      <div className={styles.banner}></div>
      <Container>
        <h2 className={styles.title}>Liên hệ với chúng tôi</h2>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div>
            <p>Địa chỉ: 25 Hồ Đắc Di - Đống Đa - Hà Nội</p>
            <p>
              Điện thoại: 0888 202 082
            </p>
            <p>
            Email: plutoicecreamsandcakes@hotmail.com           </p>
          </div>
          <div>
            <div>
            <form class="form-message text-center">
                        <h4>Để lại lời nhắn</h4>
                        <p><input type="text" required placeholder="Họ tên"/></p>
                        <p><input 
                            type="tel"
                            pattern="[0-9]{10}"
                            required 
                            placeholder="Số điện thoại"/></p>
                        <textarea placeholder="Lời nhắn" required cols="30" rows="2"></textarea>
                        <button class="btn mt-3" type="submit">Gửi</button>
                    </form>
            </div>
          </div>
        </Stack>

      </Container>
    </div>

  );
};

export default Contact;