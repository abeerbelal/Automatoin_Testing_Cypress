import LoginPage from "../../../support/pageObjects/resetPass";
import BuzzPage from "../../../support/pageObjects/BuzzPage";
import writePostAssertion from "../../../support/ActionsAndAssertions/WritePostAssertion";
const loginObj: LoginPage = new LoginPage();
const buzz: BuzzPage = new BuzzPage();
const assert: writePostAssertion = new writePostAssertion();

describe("Buzz Page: Write Buzz data", () => {
  beforeEach(function () {
    cy.visitAndLogin(loginObj, "admin", "admin123");
    buzz.goToBuzzPage();
    cy.writeFile("cypress/fixtures/postContent.txt", "Free Palestine!!!!");
  });
  it("Write New Post Then Verify That Is Published", () => {
    cy.readFile("cypress/fixtures/postContent.txt").then((data) => {
      cy.get(".oxd-buzz-post-input").type(data);
      cy.get(".oxd-buzz-post-slot > .oxd-button").click();
      assert.writePost(data);
    });
  });
});
