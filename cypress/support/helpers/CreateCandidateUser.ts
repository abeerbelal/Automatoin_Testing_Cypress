import { userRoleType } from "../types";
import Generic from "./genericHelper";
export const URLs = {
    users:  "/index.php/api/v2/admin/users",
    employes:"/index.php/api/v2/pim/employees",
  };
export const RandomUserName: string = Generic.getRandomString("abeer");
export const RandomUserPassword: string = Generic.getRandomString("123");
export default class CreateUser{

createEmployee(
    empID: string,
    firstName: string,
    lastName: string,
    middleName: string,
  ): Cypress.Chainable<number> {
    //add new employee using API
    return cy
      .request({
        method: "POST",
        url: URLs.employes,
        body: {
          empPicture: null,
          employeeId: empID,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
        },
      })
      .then((response) => {
        return response.body.data.empNumber;
      });
  }

  createUser(id: number, roleType: keyof typeof userRoleType) {
    //creat user login deails for new employee
    cy.request({
      method: "POST",
      url: URLs.users,
      body: {
        empNumber: id,
        password: RandomUserPassword,
        status: true,
        userRoleId: userRoleType[roleType],
        username: RandomUserName,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  }
}