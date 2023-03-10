import { Link } from "react-router-dom";
import Header from "../components/Header";
import Fotter from "../components/Fotter";

const Login = () => {
  return (
    <div class="body-wrapper ">
      <Header />
      <div class="ltn__login-area pb-100 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlistget personalised recommendations{" "}
                  <br />
                  check out more quickly track your orders register
                </p>
                <div class="btn-wrapper">
                  <a href="register.html" class="theme-btn-1 btn black-btn">
                    CREATE ACCOUNT
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="account-login-inner">
                <form action="#" class="ltn__form-box contact-form-box">
                  <input type="text" name="email" placeholder="Email*" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <div class="btn-wrapper mt-0">
                    <button class="theme-btn-1 btn btn-block" type="submit">
                      SIGN IN
                    </button>
                  </div>
                  <div class="go-to-btn mt-20">
                    <Link>
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};
export default Login;
