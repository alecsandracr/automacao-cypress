
describe('Interagindo com elemento Text Box', () => {

    it('Verificar cadastro com sucesso', () => {

        cy.visit('https://demoqa.com/text-box')

      
        cy.get('#userName').type('Teste cypress')
        cy.get('#userEmail').type('cypress@yopmail.com')
        cy.get('#currentAddress').type('Maria Flor, 500, Havái')
        cy.get('#permanentAddress').type('Maria Flor, 500, Havái')
        cy.get('.btn.btn-primary').click();
 
        cy.get('#userName').should('have.value', 'Teste cypress')
        cy.get('#userEmail').should('have.value', 'cypress@yopmail.com.')
        cy.get('#currentAddress').should('have.value', 'Maria Flor, 500, Havái')
        cy.get('#permanentAddress').should('have.value', 'Maria Flor, 500, Havái')
    })

    it.only('Valida e-mail incorreto como inválido', () => {
    
        cy.visit('https://demoqa.com/text-box')
  
        cy.get('#userEmail').type('cypress@yopmail')
        cy.get('.btn.btn-primary').click();
     
        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(255, 0, 0)')   // Verifica se a borda está vermelha (ou outra classe/estilo que indique erro)
    })

})