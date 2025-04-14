describe('Interagindo com Radio Button', () => {

    beforeEach( () => {
        //Arrange
        cy.visit('https://demoqa.com/radio-button')

    })

    it('Verificar se a opção "Yes" é selecionada ao ser clicada', () => {

        cy.get('label[for="yesRadio"]').click() // Clica no label associado ao "Yes"

        cy.get('#yesRadio').should('be.checked')// Verifica que o "Yes" foi marcado corretamente
    })

    it('Verificar se a opção "Impressive" é selecionada ao ser clicada', () => {

        cy.get('label[for="impressiveRadio"]').click()

        cy.get('#impressiveRadio').should('be.checked')

    })

    it('Verificar se a opção "No" está desabilitada para interação do usuário', () => {

        cy.reload()

        cy.get('#noRadio').should('be.disabled')

    })
})