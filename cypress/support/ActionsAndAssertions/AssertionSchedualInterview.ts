class StatusSchdualInterviewAssertion {
  elements = {
    status: () => cy.get(".orangehrm-recruitment-status > .oxd-text"),
  };
  assertStatusSchdualInterview() {
    this.elements.status().should("contain", "Status: Interview Scheduled");
  }
}
export default StatusSchdualInterviewAssertion;
