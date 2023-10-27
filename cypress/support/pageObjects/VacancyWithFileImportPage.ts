import ImportFileAssertion from "../ActionsAndAssertions/ImportFileAssertion";
const assert :ImportFileAssertion = new ImportFileAssertion();
export default class AddVacancyFile {
  elements = {
    AddButton: () => cy.get(".orangehrm-header-container > .oxd-button"),
    ImportFile: () => cy.get('input[type="file"]'),
    saveBtn: () =>
      cy.get(
        ":nth-child(3) > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
      ),
  };
  uploadVacancyFile(fileNme: string) {
    this.elements.AddButton().click();
    this.elements.ImportFile().selectFile(`cypress/fixtures/${fileNme}.pdf`, {
      force: true,
    });
      assert.assertImportFileName(fileNme);
    this.elements.saveBtn().click();
  }
}
