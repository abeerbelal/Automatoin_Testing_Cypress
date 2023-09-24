import LoginPage from "../../support/pageObjects/resetPass";
const loginObj: LoginPage = new LoginPage();
let userId = 0;
describe("Login Home Page", () => {
  beforeEach(function () {
    cy.visit("/");
    loginObj.login("admin", "admin123");
  });

  it.only("Verify Add User Api", () => {
    cy.request({
      method: "POST",
      url: "/index.php/api/v2/admin/users",
      body: {
        username: "axcmsaaahh",
        password: "654321AaAa",
        status: true,
        userRoleId: 2,
        empNumber: 6,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      console.log(response);
      userId = response.body.data.id;
      // console.log(userId)
    });
  });
  //   it.only('Verify Add User Api', () => {
  //         cy.request({
  //           method:'POST',
  //           url:'/index.php/api/v2/admin/users',
  //           body:
  //             {username:"axcmsa",
  //             password:"654321Aa",
  //             status:true,
  //             userRoleId:2,
  //             empNumber:6}

  //         }).then((response)=>{
  //           expect(response).property('status').to.equal(200)
  //         })
  //       })

  afterEach(function () {
    cy.request({
      method: "DELETE",
      url: "/index.php/api/v2/admin/users",
      body: {
        ids: [userId],
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  });
});
