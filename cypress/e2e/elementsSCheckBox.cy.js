describe('Interagindo com Check Box', () => {

    it('Verificar se todas as opções do checkbox podem ser marcadas', () => {

        cy.visit('https://demoqa.com/checkbox')

        cy.get('svg.rct-icon.rct-icon-uncheck').first().click()

        cy.get('#result span.text-success').should('have.length', 17)
    })

    it.only('Verificar se apenas uma opção do check box pode ser marcada', () => {

        cy.visit('https://demoqa.com/checkbox')
        
        //Expande as opções do check box
        cy.get('.rct-collapse.rct-collapse-btn').click()
        cy.get('.rct-title').contains('Documents').click()

        cy.get('#result').should('contain.text', 'documents')
        cy.get('#result span.text-success').should('have.length', 10)
    })

    it('Verificar se todas as opções do checkbox podem ser dermacadas', () => {

        cy.visit('https://demoqa.com/checkbox')

        // Clica no checkbox "Home" para marcar todos
        cy.get('svg.rct-icon.rct-icon-uncheck').first().click()
        // Verifica que os itens apareceram no #result
        cy.get('#result span.text-success').should('have.length', 17)
        // Clica novamente para desmarcar
        cy.get('svg.rct-icon.rct-icon-check').first().click()

        // Verifica que os itens sumiram (resultado limpo)
        cy.get('#result span.text-success').should('not.exist')
    })
})