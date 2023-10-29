// Add New Employee Page locators and functions
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
    AddedEmp: () => cy.get(".orangehrm-edit-employee-name > .oxd-text"),
    lisensDate: () =>
      cy.get(".oxd-date-wrapper > .oxd-date-input > .oxd-input"),
  };

  addNewEmployee(
    firstName: string,
    MiddleName: string,
    LastName: string,
    DetailaName: string,
    Pass: string,
    ConfirmPass: string
  ) {

    //this i was tried to do dynamic wait 


    //    cy.intercept("GET", "/index.php/core/i18n/messages").as("messages");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees?**").as("pimEmployees");
    //   cy.intercept("GET", "/index.php/api/v2/admin/users?**").as("pimUsers");
    //   cy.intercept("GET", "/index.php/api/v2/admin/employment-statuses?**").as("pimEmployeesStatus");
    //   cy.intercept("GET", "/index.php/api/v2/admin/job-titles?**").as("pimEmployeesJob");
    //   cy.intercept("GET", "/index.php/api/v2/admin/subunits").as("pimEmployeesSubnits");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees").as("Employee");
    //   cy.intercept("GET", "/index.php/api/v2/admin/users").as("pimEmployeesUsers");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees").as("employeeA");
    //   cy.intercept("GET", "/index.php/core/i18n/messages").as("messagesA");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees/187/personal-details").as("personal_details");
    //  // cy.intercept("GET", "/index.php/api/v2/pim/employees/187").as("187");
    //   cy.intercept("GET", "/index.php/api/v2/leave/workweek?**").as("workweed");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees/187/custom-fields?**").as("custom-fields");
    //   cy.intercept("GET", "/index.php/api/v2/pim/employees/187/screen/personal/attachments?**").as("attachments");
    //   cy.intercept("GET", "/index.php/api/v2/leave/holidays?**").as("holidays");

    // //  cy.visit("/index.php/pim/viewPersonalDetails/empNumber");

    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.AddEmp().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName);
    this.elements.EmployeeInputName().children().eq(2).type(LastName);
    this.elements.LoginDetails().click();
    this.elements.NameINDetails().type(DetailaName);
    this.elements.PassDet().eq(0).type(Pass);
    this.elements.passDetConfirm().eq(1).type(ConfirmPass);

    //       cy.visit("/index.php/pim/viewPersonalDetails/empNumber/65");
    //       cy.wait([
    //         "@pimEmployees","@pimUsers","@pimEmployeesStatus",
    //     "@pimEmployeesJob","@pimEmployeesSubnits","@Employee",
    //     "@pimEmployeesUsers","@employeeA","@messagesA","@personal_details","@workweed","@custom-fields",
    //     "@attachments","@holidays"

    // ]);
    this.elements.SaveDetailsBtn().click();
    cy.wait(4000);
    this.elements
      .AddedEmp()
      .contains(` ${firstName} ${LastName}`)
      .should("exist");
    //   // Verify the URL
    //   cy.url().should('include', '/pim/viewPersonalDetails/empNumber');

    //   // Verify the user label
    //   this.elements
    //     .userLabel()
    //     .should('exist')
    //     .should('contain', ` ${firstName} ${LastName}`);

    //this.elements.lisensDate().eq(0).contains('2023-09-25').click()
  }
}

export default addEmployee;
