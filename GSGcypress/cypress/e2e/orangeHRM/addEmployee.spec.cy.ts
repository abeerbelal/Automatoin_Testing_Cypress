import LoginPage from "../../support/pageObjects/resetPass";
import addEmployee from "../../support/pageObjects/addEmp";
const loginObj: LoginPage = new LoginPage();
const addEmp: addEmployee = new addEmployee();
describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
    cy.fixture("EmployeeInfo").as("EmpInfo");
  });

  it("Add  New Employee", () => {
    cy.get("@EmpInfo").then((infoData: any) => {
      addEmp.addNewEmployee(
        infoData.FirstName,
        infoData.MiddleName,
        infoData.LastName,
        infoData.userName,
        infoData.pass,
        infoData.confirmPass
      );
    });
  });
});
