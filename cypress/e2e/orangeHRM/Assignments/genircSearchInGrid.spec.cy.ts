import Generic from "../../../support/helpers/genericHelper";
import LoginPage from "../../../support/pageObjects/resetPass";
const loginObj: LoginPage = new LoginPage();

 describe('GenericSearchUser', () => {
    beforeEach(function () {
        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );
        loginObj.login("admin", "admin123");
      });
      it('', () => {
        cy.visit(
            `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates`
          );
          Generic.GenericSearchUser('Maiyugfbnkmjgubj','2022-06-20')
      })

   

})