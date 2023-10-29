import LoginPage from "../../../support/pageObjects/resetPass";
import CreateUser from "../../../support/helpers/CreateEmployeeUser";
import LogOutPage from "../../../support/pageObjects/LogOut";
const loginObj: LoginPage = new LoginPage();
const addEmp1: CreateUser = new CreateUser();
const logout: LogOutPage = new LogOutPage();
import { RandomUserName } from "../../../support/helpers/CreateEmployeeUser";
import { RandomUserPassword } from "../../../support/helpers/CreateEmployeeUser";
describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
    cy.fixture("EmployeeInfo").as("EmpInfo");
  });

  it("add employee via API", () => {
    cy.get("@EmpInfo").then((infoData: any) => {
      addEmp1
        .createEmployee(
          infoData.EmpID,
          infoData.firstName,
          infoData.lastName,
          infoData.middelName
        )
        .then((empId) => {
          addEmp1.createUser(empId, "ESS");
        });
    });

    logout.logOut();
    loginObj.login(RandomUserName, RandomUserPassword);
  });
});
