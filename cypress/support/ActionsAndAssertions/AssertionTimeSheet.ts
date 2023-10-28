class TimeSheetAssertion {
  elements = {
    empName: () => cy.get(".oxd-autocomplete-text-input > input"),
    View: () => cy.get(".oxd-form-actions > .oxd-button"),
    Label: () => cy.get(".orangehrm-timesheet-header--title > .oxd-text"),
    EmployeeOption: () => cy.get(".oxd-autocomplete-dropdown > :nth-child(1)"),
  };
  assertTimeSheet(empName: string) {
    this.elements.empName().type(empName);
    this.elements.EmployeeOption().click();
    this.elements.View().click({ force: true });
    this.elements.Label().should("contain", `Timesheet for ${empName}`);
  }
}
export default TimeSheetAssertion;
