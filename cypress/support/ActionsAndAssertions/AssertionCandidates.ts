class CandidatesAssertion {
    elements = {
       numberOfRows: () => cy.get('.oxd-table-body'),
        
      };
    assertNumberOfRows(count: number) {
        this.elements.numberOfRows().find('.oxd-table-card').should('have.length',count)
    }
    
}
export default CandidatesAssertion;