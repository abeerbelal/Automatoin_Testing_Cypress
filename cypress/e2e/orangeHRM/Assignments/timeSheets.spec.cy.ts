import LoginPage from "../../../support/pageObjects/resetPass";
import CreateUser from "../../../support/helpers/CreateEmployeeUser";
import LogOutPage from "../../../support/pageObjects/LogOut";
import Timesheets from "../../../support/helpers/timeSheets";
import TimeSheetAssertion from "../../../support/ActionsAndAssertions/AssertionTimeSheet";
const loginObj: LoginPage = new LoginPage();
const addEmp: CreateUser = new CreateUser();
const logout: LogOutPage = new LogOutPage();
const assert: TimeSheetAssertion = new TimeSheetAssertion();
import { RandomUserName } from "../../../support/helpers/CreateEmployeeUser";
import { RandomUserPassword } from "../../../support/helpers/CreateEmployeeUser";
describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visitAndLogin(loginObj, "admin", "admin123");
    cy.fixture("EmployeeInfo").as("EmpInfo");
  });

  it("Timesheets", () => {
    cy.get("@EmpInfo").then((infoData: any) => {
      addEmp
        .createEmployee(
          infoData.EmpID,
          infoData.firstName,
          infoData.lastName,
          infoData.middelName
        )
        .then((empId) => {
          console.log(empId);
          addEmp.createUser(empId, "ESS");
        });
      logout.logOut();
      loginObj.login(RandomUserName, RandomUserPassword);
      cy.visit("/index.php/time/viewMyTimesheet");
      Timesheets.getTimeSheetID().then((timeSeetId) => {
        Timesheets.editTimesheets(timeSeetId);
        Timesheets.SubmitTimesheets(timeSeetId);
      });
      logout.logOut();
      loginObj.login("admin", "admin123");
      cy.visit("/index.php/time/viewEmployeeTimesheet");
      assert.assertTimeSheet(RandomUserName);
    });
  });
});
