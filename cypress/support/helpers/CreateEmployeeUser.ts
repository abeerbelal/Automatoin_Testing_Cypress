import { userRoleType } from "../types";
import Generic from "./genericHelper";
export const URLs = {
  users: "/web/index.php/api/v2/admin/users",
  employes: "/web/index.php/api/v2/pim/employees",
};
export const RandomUserName: string = Generic.getRandomString("abeer");
export const RandomUserPassword: string = Generic.getRandomString("123456Aa");
export default class CreateUser {
  createEmployee(
    empID: string,
    firstName: string,
    lastName: string,
    middleName: string
  ): Cypress.Chainable<number> {
    //add new employee using API
    return cy
      .request({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          empPicture: null,
          lastName: lastName,
          employeeId: empID,
          firstName: firstName,
          middleName: middleName,
        },
      })
      .then((response) => {
        return response.body.data.empNumber;
      });
  }

  createUser(id: number, roleType: keyof typeof userRoleType) {
    //creat user login details for new employee
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
