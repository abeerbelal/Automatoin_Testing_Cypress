import LoginPage from "../../../support/pageObjects/resetPass";
const loginObj: LoginPage = new LoginPage();
describe("Login Home Page", () => {
  beforeEach(function () {
    //  cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('LoginPage')
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginObj.login("admin", "admin123");
  });

  it("Valid Login", () => {
    //loginObj.login('admin',"admin123")
    //loginObj.forgetPassword('admin','Reset Password link sent successfully'); //
  });
  it("Verfiy Login response", () => {
    cy.request(
      "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages"
    ).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  });
  it.only("Verify Add User Api", () => {
    cy.request({
      method: "POST",
      url: "/index.php/api/v2/admin/users",
      body: {
        username: "aalxca",
        password: "1234jdk",
        status: true,
        userRoleId: 2,
        empNumber: 6,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  });
});
