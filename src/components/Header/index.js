import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="ltn__header-area ltn__header-3 section-bg-6">
      <div class="header-bottom-area ltn__border-top ltn__header-sticky ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col header-menu-column justify-content-between">
              <div>
                <div class="site-logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
              <div class="header-menu header-menu-2">
                <nav>
                  <div class="ltn__main-menu">
                    <ul>
                      <li class="menu-icon">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="menu-icon">
                        <Link to="/"> Product</Link>
                      </li>
                      <li class="menu-icon">
                        <Link to="/">Login</Link>
                      </li>
                      <li class="menu-icon">
                        <Link to="/">Register</Link>
                      </li>
                      <li class="menu-icon">
                        <Link to="/">Register</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
