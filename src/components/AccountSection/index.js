import TabDashboard from "./TabDashboard";
import TabOrder from "./TabOrder";
import TabAccount from "./TabAccount";
const AccountSection = () => {
  return (
    <div class="liton__wishlist-area pb-50 mt-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ltn__product-tab-area">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="ltn__tab-menu-list mb-50">
                      <div class="nav">
                        <a
                          class="active show"
                          data-bs-toggle="tab"
                          href="#liton_tab_1_1"
                        >
                          Dashboard <i class="fas fa-home"></i>
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_2">
                          Orders <i class="fas fa-file-alt"></i>
                        </a>
                        <a data-bs-toggle="tab" href="#liton_tab_1_5">
                          Account Details <i class="fas fa-user"></i>
                        </a>
                        <a href="login.html">
                          Logout <i class="fas fa-sign-out-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="tab-content">
                      <div class="tab-pane fade active show" id="liton_tab_1_1">
                        <TabDashboard />
                      </div>
                      <div class="tab-pane fade" id="liton_tab_1_2">
                        <TabOrder />
                      </div>
                      <div class="tab-pane fade" id="liton_tab_1_5">
                        <TabAccount />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountSection;
