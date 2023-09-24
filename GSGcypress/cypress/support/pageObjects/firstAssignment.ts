import { userRoleType } from "../types";

//Add New Employee Page locators and functions
let empNO: string = "";
class addEmployee {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    AddEmp: () => cy.get(".oxd-button--secondary"),
    EmployeeInputName: () => cy.get(".--name-grouped-field"),
    saveNewEmp: () => cy.get('button[type="submit"]'),
    LoginDetails: () => cy.get(".--label-right"),
    NameINDetails: () =>
      cy.get(
        ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    PassDet: () => cy.get('input[type="password"]'),
    passDetConfirm: () => cy.get('input[type="password"]'),
    SaveDetailsBtn: () => cy.get('button[type="submit"]'),
    userLabel: () => cy.get(".orangehrm-edit-employee-name > .oxd-text"),
    lisensDate: () => cy.get('[placeholder="yyyy-mm-dd"]'),
    selectInputs: () =>
      cy.get(".oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"),
    checkBOxSmoker: () =>
      cy.get(
        ":nth-child(2) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
      ),
    SecoundSave: () =>
      cy.get(":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"),
    //search By ID
    EmpId: () => cy.get(":nth-child(2) > .oxd-input"),
    SearchBtn: () => cy.get(".oxd-form-actions > .oxd-button--secondary"),
    FistAndMiddleNameAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3) > div"),
    LastNameAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(4) > div"),
    JobTitleAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(5) > div"),
    EmploymentStatusAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(6) > div"),
    SununitAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(7) > div"),
    SupervisorAssertion: () =>
      cy.get(".oxd-table-card > .oxd-table-row > :nth-child(8) > div"),
  };

  addNewEmployee(
    firstName: string,
    MiddleName: string,
    LastName: string,
    DetailaName: string,
    Pass: string,
    ConfirmPass: string
  ) {
    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.AddEmp().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName);
    this.elements.EmployeeInputName().children().eq(2).type(LastName);
    this.elements.LoginDetails().click();
    this.elements.NameINDetails().type(DetailaName);
    this.elements.PassDet().eq(0).type(Pass);
    this.elements.passDetConfirm().eq(1).type(ConfirmPass);
    this.elements.SaveDetailsBtn().click();
    cy.wait(5000);
    const fullName = `${firstName} ${LastName}`;
    this.assertUserLabel(fullName);
    this.elements.lisensDate().eq(0).click().type("2023-10-21").blur();
    this.elements.selectInputs().eq(0).click({ force: true });
    //  cy.pause()
    cy.get(":nth-child(5) > span").click();
    this.elements.checkBOxSmoker().click({ force: true });
    this.elements.SecoundSave().click();
  }

  searchByID(id: string) {
    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.EmpId().type(id);
    this.elements.SearchBtn().click({ force: true });
  }

  TableAssertion(
    firstName: string,
    middleName: string,
    lastName: string,
    jobTitle: string,
    employmentStatus: string,
    subUnit: string,
    supervisor: string
  ) {
    const Name = `${firstName} ${middleName}`;
    this.elements.FistAndMiddleNameAssertion().should("contain", Name);
    this.elements.LastNameAssertion().should("contain", lastName);
    this.elements.JobTitleAssertion().should("contain", jobTitle);
    this.elements
      .EmploymentStatusAssertion()
      .should("contain", employmentStatus);
    this.elements.SununitAssertion().should("contain", subUnit);
    this.elements.SupervisorAssertion().should("contain", supervisor);
  }

  assertUserLabel(expectedName: string) {
    this.elements.userLabel().should("contain", expectedName);
  }

  createEmployee(
    empID: string,
    firstName: string,
    lastName: string,
    middleName: string,
    withUser = true
  ): Cypress.Chainable<number> {
    //add new employee using API
    return cy
      .request({
        method: "POST",
        url: "/index.php/api/v2/pim/employees",
        body: {
          empPicture: null,
          employeeId: empID,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
        },
      })
      .then((response) => {
        // expect(response).property("status").to.equal(200);
        // console.log(response.body);
        // empNO = response.body.data.empNumber;
        // this.elements.empLoader().should('not.exist')
        // withUser && this.createUser(response.body.data.empNumber, "ESS");
        return response.body.data.empNumber;
      });
  }

  createUser(id: number, roleType: keyof typeof userRoleType) {
    //creat user login deails for new employee
    cy.request({
      method: "POST",
      url: "/index.php/api/v2/admin/users",
      body: {
        empNumber: id,
        password: "hkounou123",
        status: true,
        userRoleId: userRoleType[roleType],
        username: "12345GSGabeer",
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }

  addJobDetailsForEmployeeNumber(id: number) {
    //creat user login deails for new employee
    cy.request({
      method: "PUT",
      url: `/index.php/api/v2/pim/employees/${id}/job-details`,
      body: {
        empStatusId: 2,
        jobTitleId: 22,
        joinedDate: null,
        subunitId: 2,
      },
      // headers: {
      //   Referer: `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewJobDetails/empNumber/${id}`,
      // },
    });
  }

  addSuperviserForEMployeeNumber(id: number): Cypress.Chainable<string> {
    return cy
      .request({
        method: "POST",
        url: `/index.php/api/v2/pim/employees/${id}/supervisors`,
        body: {
          empNumber: Math.floor(Math.random() * (10 - 1 + 1)) + 1,
          reportingMethodId: 1,
        },
      })
      .then((response) => {
        const supervisorFullName = `${response.body.data.supervisor.firstName} ${response.body.data.supervisor.lastName}`;
        return supervisorFullName;
      });
  }
}
export default addEmployee;
