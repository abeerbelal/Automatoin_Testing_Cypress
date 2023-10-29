//import LoginPage from "../../pageObjects/LoginPage"
//const loginObj: LoginPage =new LoginPage();
describe('Login Home Page', ()=> {
    beforeEach(function(){
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('Login')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //  cy.get('[placeholder="Username"]').type('Admin')
      //  cy.get('[placeholder="Password"]').type('admin123')
      //  cy.get('button').click()
      
    })
    it('valid Login', ()=> {
       // cy.get('.oxd-topbar-header-title').contains('Dashboard')
    })
    it.skip('valid Login2', ()=> {
       
        cy.get('.oxd-topbar-header-title').should('contain','Dashboard')
    })
    it('forgetPass',()=>{
        cy.get('.orangehrm-login-forgot-header').click()
        cy.get('.orangehrm-forgot-password-title').contains('Reset Password').should('exist')
       cy.getByCy("Username").type('Admin')
       cy.get('[type="submit"]').click()
       cy.get('.orangehrm-forgot-password-title').contains('Reset Password link sent successfully').should('exist')

       
      
           
    })

})