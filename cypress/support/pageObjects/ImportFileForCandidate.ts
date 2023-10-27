import ImportFileAssertion from "../ActionsAndAssertions/ImportFileAssertion";
import Generic from "../helpers/genericHelper";
const assert: ImportFileAssertion = new ImportFileAssertion();
export default class ImportFileFromCandidate {
  elements = {
    firstName: () =>
      cy.get(
        ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
      ),
    lastName: () => cy.get(":nth-child(3) > :nth-child(2) > .oxd-input"),
    email: () =>
      cy.get(
        ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ),
    saveBtn: () => cy.get(".oxd-button--secondary"),
    ImportFile: () => cy.get('input[type="file"]'),
  };
  CandidateDetalis() {
    this.elements.firstName().type(Generic.getRandomString("abeer"));
    this.elements.lastName().type(Generic.getRandomString("belal"));
    this.elements.email().type(Generic.getRandomString("@gmail.com"));
  }
  addFileCandidate(fileNme: string) {
    this.elements.ImportFile().selectFile(`cypress/fixtures/${fileNme}.pdf`, {
      force: true,
    });
    assert.assertImportFileName(fileNme);
    this.elements.saveBtn().click();
  }
}
