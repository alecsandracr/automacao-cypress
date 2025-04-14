
describe('Interagindo com elemento Text Box', () => {

    beforeEach( () => {
        //Arrange
        cy.visit('https://demoqa.com/text-box')
    })

    it('Verificar cadastro com sucesso', () => {
        //Act           
        cy.get('#userName').type('Teste cypress')
        cy.get('#userEmail').type('cypress@yopmail.com')
        cy.get('#currentAddress').type('Maria Flor, 500, Havái')
        cy.get('#permanentAddress').type('Maria Flor, 500, Havái')
        cy.get('.btn.btn-primary').click();

        //Assert
        cy.get('#userName').should('have.value', 'Teste cypress')
        cy.get('#userEmail').should('have.value', 'cypress@yopmail.com.')
        cy.get('#currentAddress').should('have.value', 'Maria Flor, 500, Havái')
        cy.get('#permanentAddress').should('have.value', 'Maria Flor, 500, Havái')
    })

    it('Valida e-mail incorreto como inválido', () => {

        cy.get('#userEmail').type('cypress@yopmail')
        cy.get('.btn.btn-primary').click();
        // Verifica se a borda está vermelha (ou outra classe/estilo que indique erro)
        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(255, 0, 0)')
    })

})