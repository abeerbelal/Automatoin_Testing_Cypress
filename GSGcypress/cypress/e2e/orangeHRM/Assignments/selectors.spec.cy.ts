import LoginPage from "../../../support/pageObjects/resetPass";
import DashBordActions from './../../../support/ActionsAndAssertions/DashBordActions';
const loginObj: LoginPage = new LoginPage();
const dashBordActions = new DashBordActions();
describe("Login Home Page", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginObj.login("admin", "admin123");
  });

  it("verify selectors", () => {
     
    dashBordActions.getQuickCard().then((domEl) => {
      console.log(domEl);
    })

  });
 
});
