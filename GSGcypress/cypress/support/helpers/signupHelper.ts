const baseUrl = Cypress.config().baseUrl;

export const URLs = {
 // users: `${baseUrl}/api/users`,
  users: "https://conduit.productionready.io/api/users",
};

export default class addUser {
  static conduitNewUserUsingAPI(payload: any) {
   return  cy.api({
      method: "POST",
      url: URLs.users,
      body: payload,
    });
  }

   ApiRequest( method: "POST" | "GET" | "DELETE", url: string, data: object = {}){
    return cy.api({
      method: method,
      url: url,
      body: data
    }).then((response) => {
      expect(response).haveOwnProperty("status").equal(200);
    })

  }
}


