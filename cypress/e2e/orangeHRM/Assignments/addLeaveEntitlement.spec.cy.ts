import LoginPage from "../../../support/pageObjects/resetPass";
import CreateUser from "../../../support/helpers/CreateEmployeeUser";
import LogOutPage from "../../../support/pageObjects/LogOut";
import LeaveEntitlementClass from "../../../support/helpers/addLeaveEntitlement";
import LeaveEntitlementAssertion from "../../../support/ActionsAndAssertions/LeaveEntitlementAssertion";
const loginObj: LoginPage = new LoginPage();
const addEmp: CreateUser = new CreateUser();
const logout: LogOutPage = new LogOutPage();
const assert: LeaveEntitlementAssertion = new LeaveEntitlementAssertion();
import { RandomUserName } from "../../../support/helpers/CreateEmployeeUser";
import { RandomUserPassword } from "../../../support/helpers/CreateEmployeeUser";
describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visitAndLogin(loginObj, "admin", "admin123");
   
    cy.fixture("EmployeeInfo").as("EmpInfo");
  });

  it("Apply for Leave ,Approve it by admin and verify that it is Scheduled", () => {
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
          LeaveEntitlementClass.EntitlementRequest(empId);
         
        });
    });
    logout.logOut();
    loginObj.login(RandomUserName, RandomUserPassword);
    LeaveEntitlementClass.leaveRequest().then((leaveId) => {
      logout.logOut();
      loginObj.login("admin", "admin123");
      LeaveEntitlementClass.approveLeaveRequest(leaveId);
    });
    logout.logOut();
    loginObj.login(RandomUserName, RandomUserPassword);
    assert.assertLeaveEntitlement();
  });
});
