import { Link } from "react-router-dom";
import Header from "../components/Header";
import Fotter from "../components/Fotter";
const Register = () => {
  return (
    <div class="body-wrapper">
      <Header />
      <div class="ltn__login-area pb-90 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>
                  Register <br />
                  Your Account
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
            <div class="col-lg-6 offset-lg-3">
              <div class="account-login-inner">
                <form action="#" class="ltn__form-box contact-form-box">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                  <input type="text" name="lastname" placeholder="Last Name" />
                  <input type="text" name="email" placeholder="Email*" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                  />
                  <label class="checkbox-inline">
                    <input type="checkbox" value="" />I consent to Herboil
                    processing my personal data in order to send personalized
                    marketing material in accordance with the consent form and
                    the privacy policy.
                  </label>
                  <label class="checkbox-inline">
                    <input type="checkbox" value="" />
                    By clicking "create account", I consent to the privacy
                    policy.
                  </label>
                  <div class="btn-wrapper">
                    <button
                      class="theme-btn-1 btn reverse-color btn-block"
                      type="submit"
                    >
                      CREATE ACCOUNT
                    </button>
                  </div>
                </form>
                <div class="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <Link to="/">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </Link>
                  </p>
                  <div class="go-to-btn mt-50">
                    <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};
export default Register;
