import { CreateConduitRespons } from "../response/UserApiResponse";
import { CreateConduitPayload } from "../payload/UserApiPayload";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      addNewUser: (
        requestUrl: string,
        employeePayload: CreateConduitPayload
      ) => Chainable<CreateConduitRespons>;
    }
  }
}

Cypress.Commands.add(
  "addNewUser",
  (requestUrl: string, employeePayload: CreateConduitPayload) => {
    return cy
      .api({
        method: "POST",
        url: requestUrl,
        body: employeePayload,
        headers: {
          "Content-Type": "appLication/json",
        },
      })
      .its("body");
  }
);
