import { Container } from "@mui/material";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./Login.module.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main className={styles.main_content}>
        <div className={styles.account_section}>
          <div className={styles.shopify_section}>
            <div className={styles.shopify_image}>

            </div>
          </div>
          <div className={styles.form}>
              <div className={styles.form_center}>
                <div className={styles.box}>
                  <div id="LoginTitle" className={styles.page_title}>
                    <h1>
                      <span className={styles.CustomerLoginTitle}>Đăng nhập</span>
                    </h1>
                  </div>
                  <div id="CustomerLoginForm" className="form-vertical">
                    <form>


                      <div className={styles.email_input}>
                        <MailOutlinedIcon style={{color:"var(--green-color)"}} />
                        <input className={styles.input} type="email" placeholder="E-mail" name="customer[email]" id="CustomerEmail" autoCorrect="off" autoCapitalize="off" autoFocus="" />
                      </div>


                      <div className={styles.password_input}>
                        <LockOutlinedIcon style={{color:"var(--green-color)"}}/>
                        <input className={styles.input} type="password" placeholder="Password" name="customer[password]" id="CustomerPassword"  />
                      </div>


                      <input  type="submit" className={`${styles.signin_button} button button-second`} value={"Sign in"}/>
                      <Link to="/account/register"><input  type="submit" className={`${styles.create_account_button} button button-second`} value={"Chưa có tài khoản? Đăng ký ngay"}/></Link>
                      
                      <div className="text-center buttons-set">

                        <a className={styles.forgot_password} href="#recover" id="RecoverPassword">Quên mật khẩu?</a>

                      </div>
                      <input type="hidden" name="return_url" />

                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>

  );
};

export default Login;