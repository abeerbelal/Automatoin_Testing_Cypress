import LoginPage from "../../../support/pageObjects/resetPass";
import ImportFileFromCandidate from "../../../support/pageObjects/ImportFileForCandidate";

const loginObj: LoginPage = new LoginPage();
const ImportFile: ImportFileFromCandidate = new ImportFileFromCandidate();
const fileName: string = "abeer";
describe("verify Recruitment", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
  });

  it("ImportFileFromCandidate", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate"
    );
    ImportFile.CandidateDetalis();
    ImportFile.addFileCandidate(fileName);
  });
});
