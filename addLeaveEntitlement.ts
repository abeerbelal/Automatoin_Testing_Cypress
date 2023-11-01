import EntitlementPayloadInit from "../API/init/LeaveEntitlementInit";
export const URLs = {
  Entitlement: `/web/index.php/api/v2/leave/leave-entitlements`,
  Leave: "",
};

export default class LeaveEntitlementClass {
  static EntitlementRequest(empNumber: number) {
    return cy
      .request({
        method: "POST",
        url: URLs.Entitlement,
        body: EntitlementPayloadInit.initEntitlement(empNumber),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        // cy.log(response.body.data)
      });
  }

  static leaveRequest(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: "/web/index.php/api/v2/leave/leave-requests",
        body: EntitlementPayloadInit.initLeave(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        const leaveId = response.body.data.id;
        return leaveId;
      });
  }
  static approveLeaveRequest(leaveId: number){
    return cy.request({ 
        method: 'PUT', 
        url: `/web/index.php/api/v2/leave/employees/leave-requests/${leaveId}`,
        body: {
            "action": "APPROVE"
        } 
      }).then((response) => { 
        expect(response.status).to.eq(200); 
      });  
}
}
