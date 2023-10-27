import { EntitlementPayload } from "../payload/EntitlementPayloadApi";
import { LeaveRequestPayload } from "../payload/LeavePayload";
export default class EntitlementPayloadInit {
  static initEntitlement(employeeNumber: number): EntitlementPayload {
    let leaveEntitlementPayload: EntitlementPayload = {
      empNumber: employeeNumber,
      leaveTypeId: "6",
      fromDate: "2023-01-01",
      toDate: "2024-8-24",
      entitlement: "30",
    };
    return leaveEntitlementPayload;
  }
  static initLeave(): LeaveRequestPayload {
    let leaveRequest: LeaveRequestPayload = {
      leaveTypeId: 6,
      fromDate: "2023-10-25",
      toDate: "2023-10-27",
      comment: null,
    };
    return leaveRequest;
  }
}
