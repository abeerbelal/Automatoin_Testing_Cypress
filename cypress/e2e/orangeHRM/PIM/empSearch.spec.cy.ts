import LoginPage from "../../../support/pageObjects/resetPass";
import PIMtab from "../../../support/pageObjects/searchEmp";
const loginObj: LoginPage = new LoginPage();
const PIMtabObj: PIMtab = new PIMtab();

describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
  });

  it("Search Employee", () => {});
});
