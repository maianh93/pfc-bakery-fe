import { Container } from "@mui/material";
import styles from "./Login.module.css"

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
                      <span className="CustomerLoginTitle">Sign In</span>
                    </h1>
                  </div>
                  <div id="CustomerLoginForm" className="form-vertical">
                    <form>


                      <div className="input-box">
                        <i className="fal fa-envelope"></i>
                        <input type="email" placeholder="E-mail Address" name="customer[email]" id="CustomerEmail" className="" autoCorrect="off" autoCapitalize="off" autoFocus="" />
                      </div>


                      <div className="input-box">
                        <i className="fal fa-lock"></i>
                        <input type="password" placeholder="Password" name="customer[password]" id="CustomerPassword" className="" />
                      </div>


                      <input type="submit" className="button button-second" />
                      <a className="button button-second button-second-solid" href="/account/register">No account? Create an account here</a>
                      <div className="text-center buttons-set">

                        <a className="button-text button-text-second" href="#recover" id="RecoverPassword">Forgot your password?</a>

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