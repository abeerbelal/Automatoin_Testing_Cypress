import addUser from "../../../support/helpers/signupHelper";
import { apiMethods, apiPaths } from "../../../support/helpers/Enums";
import Generic from "../../../support/helpers/genericHelper";
import { ApiRequestBayload } from "../../../interfacses/ApiBAyload";

const generic = new Generic();

describe("conduiut: Signup Account", () => {
  it("Cxxx1: Conduit - Create new Account", () => {
    const apiPayload = {
      user: {
        username: `abeer${Math.round(10000 * Math.random())}`,
        email: `abeer${Math.round(10000 * Math.random())}@test.com`,
        password: "12345",
      },
    };

    addUser.conduitNewUserUsingAPI(apiPayload).then((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it("Cxxx2: Conduit - Create new Account", () => {
    cy.ApiRequest(apiMethods.POST, apiPaths.conduitsapi, {
      user: {
        username: `${generic.getRandomString("abeer")}`,
        email: `${generic.getRandomString("abeer")}@gmail.com`,
        password: "12345",
      },
    });
  });

  it.only("Cxxx3: Conduit - Create new Account", () => {
    const requestData: ApiRequestBayload = {
      user: {
        username: `${generic.getRandomString("abeer")}`,
        email: `${generic.getRandomString("abeer")}@gmail.com`,
        password: "12345",
      },
    };
    cy.ApiRequest(apiMethods.POST, apiPaths.conduitsapi, requestData);
  });
});
