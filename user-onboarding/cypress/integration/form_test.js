describe('Name input test', ()=> {
    
    const nameInput = () => cy.get("[name='username']");
    const emailInput = () => cy.get("[name='email']");
    const passwordInput = () => cy.get("[name='password']");
    const checkInput = () => cy.get("[name='tos']");
    const submitInput = () => cy.get("[id='submit']")
    
    
    it('checks to see if input works', () => {
        cy.visit('http://localhost:3000/')
        nameInput()
            .type('Will')
            .should('have.value', 'Will');
        emailInput()
            .type('williamjaredbuchanan@gmail.com');
        passwordInput()
            .type('password');
        checkInput()
            .click()
            .should('be.checked');
        cy.get('form').submit()

    })

    it('check for form validation', () => {
        cy.visit('http://localhost:3000/')
        nameInput()
            .should('have.value', '')
            .type('Will')
            .clear()
            cy.contains('required')
    })
})