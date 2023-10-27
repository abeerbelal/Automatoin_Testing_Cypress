import keyVal from "../../interfacses/keyVal";

class PIMtab {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    EmployeeInputName: () =>
      cy.get(
        ":nth-child(1) > .oxd-autocomplete-text-input--before > .oxd-autocomplete-text-input oxd-autocomplete-text-input--active >.oxd-autocomplete-wrapper"
      ),
  };
  selectPIM() {
    this.elements.MainMenuItems().contains("PIM").click();
  }
  checkSearch() {}
}
export default PIMtab;
