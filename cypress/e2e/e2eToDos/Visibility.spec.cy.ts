describe('todos App tests', () =>{

    beforeEach(function () {
        cy.visit('https://example.cypress.io/todo');
    })

    it('Verfiy visibilty of elements', () => {
        cy.get('.todo-button').eq(0).invoke('show').click();
        cy.contains('a','Active').trigger('mouseover').click()
    });

    it.only('get Cookies for the current state', () => {
        cy.visit('https://example.cypress.io/commands/cookies');
        cy.getCookies().should('be.empty')
        cy.get('#getCookie .set-a-cookie').click()
        cy.getCookies().should('have.length', 1).should((cookies) => {//if there is more than one cookie it will work but if i put the 
           expect(1).to.be.equal //this give me the match              //length 2 and there is just one cookie it will not work
            expect((cookies[0])).to.have.property('name', 'token')          
            expect((cookies[0])).to.have.property('value', '123ABC')
        })


    })
})
    
