import { reject, resolve } from "cypress/types/bluebird";
import userInit from "../init/userInit";
import { CreateConduitRespons } from "../response/UserApiResponse";
const baseUrl = Cypress.config().baseUrl;

export const URLs = {
  // users: `${baseUrl}/api/users`,
  users: "https://conduit.productionready.io/api/users",
};

export default class addUser {
  static addNewuserViaAPI() {
    // <CreateConduitRespons>
    return new Cypress.Promise<string>((resolve, reject) => {
      cy.addNewUser(URLs.users, userInit.initUser());
      resolve('Operation Done');
    }).catch( (error)=> {
      cy.log("Error occures while promise back")
      
    })
    
  }
}
