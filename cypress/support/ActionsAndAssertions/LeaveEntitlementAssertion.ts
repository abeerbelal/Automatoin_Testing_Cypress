class LeaveEntitlementAssertion {
  elements = {
    approveLeave: () => cy.get(":nth-child(7) > div"),
  };
  assertLeaveEntitlement() {
    cy.visit("/web/index.php/leave/viewMyLeaveList");
    cy.wait(3000);
    this.elements
      .approveLeave()
      .should("contain", "Taken (1.00), Scheduled (2.00)");
  }
}
export default LeaveEntitlementAssertion;
