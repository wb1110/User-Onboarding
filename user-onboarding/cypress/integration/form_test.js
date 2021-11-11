describe('Name input test', ()=> {
    
    const nameInput = () => cy.get("[name='username']");
    const emailInput = () => cy.get("[name='email']");
    const passwordInput = () => cy.get("[name='password']");
    const checkInput = () => cy.get("[name='tos']");
    const submitInput = () => cy.get("[id='submit']")
    
    
    it('checks to see if the text inputted contains the name provided', () => {
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
})