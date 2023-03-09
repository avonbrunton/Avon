const TabAccount = () => {
  return (
    <div class="ltn__myaccount-tab-content-inner mb-50">
      <p>
        The following addresses will be used on the checkout page by default.
      </p>
      <div class="ltn__form-box">
        <form action="#">
          <div class="row mb-50">
            <div class="col-md-6">
              <label>First name:</label>
              <input type="text" name="ltn__name" />
            </div>
            <div class="col-md-6">
              <label>Last name:</label>
              <input type="text" name="ltn__lastname" />
            </div>
            <div class="col-md-6">
              <label>Display Name:</label>
              <input type="text" name="ltn__lastname" placeholder="Ethan" />
            </div>
            <div class="col-md-6">
              <label>Display Email:</label>
              <input
                type="email"
                name="ltn__lastname"
                placeholder="example@example.com"
              />
            </div>
          </div>
          <fieldset>
            <legend>Password change</legend>
            <div class="row">
              <div class="col-md-12">
                <label>
                  Current password (leave blank to leave unchanged):
                </label>
                <input type="password" name="ltn__name" />
                <label>New password (leave blank to leave unchanged):</label>
                <input type="password" name="ltn__lastname" />
                <label>Confirm new password:</label>
                <input type="password" name="ltn__lastname" />
              </div>
            </div>
          </fieldset>
          <div class="btn-wrapper">
            <button
              type="submit"
              class="btn theme-btn-1 btn-effect-1 text-uppercase"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabAccount;
