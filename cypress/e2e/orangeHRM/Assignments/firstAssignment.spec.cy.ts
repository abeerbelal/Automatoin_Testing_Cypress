import LoginPage from "../../../support/pageObjects/resetPass";
import addEmployee from "../../../support/pageObjects/firstAssignment";
const loginObj: LoginPage = new LoginPage();
const addEmp1: addEmployee = new addEmployee();
// let id: string = "";
describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
    cy.fixture("EmployeeInfo").as("EmpInfo");
  });

  it("Add  New Employee Via UI", () => {
    cy.get("@EmpInfo").then((infoData: any) => {
      addEmp1.addNewEmployee(
        infoData.FirstName,
        infoData.MiddleName,
        infoData.LastName,
        infoData.userName,
        infoData.pass,
        infoData.confirmPass
      );
    });
  });

  it.only("add employee via API", () => {
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
          addEmp1.addJobDetailsForEmployeeNumber(empId);
          addEmp1
            .addSuperviserForEMployeeNumber(empId)
            .then((supervisorName) => {
              addEmp1.searchByID(infoData.EmpID);
              addEmp1.TableAssertion(
                infoData.firstName,
                infoData.middelName,
                infoData.lastName,
                infoData.JobTitle,
                infoData.EmploymentStatus,
                infoData.SubUnit,
                supervisorName
              );
            });
        });
    });
  });

  it("Search by Key value - Employee", () => {
    addEmp1.searchByID("11777");
  });

  afterEach(function () {
    cy.get("@EmpInfo").then((infoData: any) => {
      cy.request({
        method: "DELETE",
        url: "/index.php/api/v2/admin/users",
        body: {
          ids: [infoData.EmpID],
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  });
});
