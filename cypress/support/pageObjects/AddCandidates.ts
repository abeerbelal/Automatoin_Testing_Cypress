class CandidatesSchedualInterview {
  elements = {
    SchedualInterviewSaveBtn: () => cy.get(".oxd-button--secondary"),
    Date: () => cy.get(".oxd-date-input > .oxd-input"),
    //Time: () => cy.get('.oxd-time-input > .oxd-input'),
    Interviwer: () => cy.get(".oxd-autocomplete-text-input > input"),
    Title: () =>
      cy.get(
        ":nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    option: () => cy.get(".oxd-autocomplete-dropdown > :nth-child(1)"),
  };

  MakeSchedualInterview() {
    this.elements.Date().click().type("2023-10-21").blur();
    this.elements.Title().type("test");
    this.elements.Interviwer().type("f");
    cy.wait(5000);
    this.elements.option().click();
    this.elements.SchedualInterviewSaveBtn().click();
    //cy.pause();
  }
}
export default CandidatesSchedualInterview;
