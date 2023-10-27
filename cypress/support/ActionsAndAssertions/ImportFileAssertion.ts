class ImportFileAssertion {
  elements = {
    FileName: () => cy.get(".oxd-file-input-div"),
  };
  assertImportFileName(fileNme: string) {
    this.elements.FileName().should("contain", fileNme);
  }
}
export default ImportFileAssertion;
