
class Candidates {
  elements = {
    MainMenuItems: () => cy.get('.oxd-topbar-header-title'),
    Recrutmenit: () => cy.get(":nth-child(5) > .oxd-main-menu-item"),
    RecordsTable: () => cy.get(".oxd-table-body"),
    rows: () => cy.get('.oxd-table-body > .oxd-table-row'),

  };

  selectRecrutment() {
    this.elements.Recrutmenit().click();
    this.elements.MainMenuItems().contains("Recruitment"); 
  }
  countRows() {
    this.elements.RecordsTable().then((table) => {
        const rows = table.find('.oxd-table-row');
        cy.log(`Total rows: ${rows.length}`);
        
        // rows.each((index, row) => {
        //     const cells = Cypress.$(row).find('td');
        //     cells.each((cellIndex, cell) => {
        //     cy.log(`Cell ${cellIndex}: ${Cypress.$(cell).text()}`);
        //     });
        //   });
    })
  }


  
}
export default Candidates;
