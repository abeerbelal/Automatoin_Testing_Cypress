// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { APIstatus } from "./helpers/Enums";
import LoginPage from "./pageObjects/resetPass";
import "cypress-file-upload";
declare global {
 namespace Cypress {
  
  interface Chainable<Subject> {
    
    getByCy: typeof getByCy;
    ApiRequest: typeof ApiRequest;
    visitAndLogin: typeof visitAndLogin;
  }
}}
function getByCy(field: String) {
  // return cy.get('[placeholder="'+field+'"]')
  return cy.get(`[placeholder=${field}]`);
}

function ApiRequest(
  method: "POST" | "GET" | "DELETE" | "PUT",
  url: string,
  data: object = {}// if the method is get i will send empty data and it will be pass
) {
  return cy
    .api({
      method,
      url,
      body: data,
    })
    .then((response) => {
      
        expect(response).haveOwnProperty("status").to.equal(APIstatus[method]);
    });
}

function visitAndLogin(pageObj: LoginPage, username: string, password: string) {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  pageObj.login(username, password);
}

Cypress.Commands.add("ApiRequest", ApiRequest);
Cypress.Commands.add("getByCy", getByCy);
Cypress.Commands.add("visitAndLogin", visitAndLogin);
