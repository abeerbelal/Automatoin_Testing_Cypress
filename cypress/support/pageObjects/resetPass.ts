class LoginPage {
  elements = {
    userName: () => cy.get('[placeholder="Username"]'),
    password: () => cy.get('[placeholder="Password"]'),
    loginBtn: () => cy.get("button"),
    forgetBtn: () => cy.get(".orangehrm-login-forgot"),
    resetBtn: () => cy.get('[type="submit"]'),
    forgetUserName: () => cy.getByCy("Username"),
    successMsg: () => cy.get(".orangehrm-forgot-password-title"),
  };
  login(userName: string, password: string) {
    this.elements.userName().type(userName);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
  }
  forgetPassword(forgetUserName: string, msg: string) {
    this.elements.forgetBtn().click();
    this.elements.forgetUserName().type(forgetUserName);
    this.elements.resetBtn().click();
    this.elements.successMsg().should("contain", msg);
  }
}
export default LoginPage;
