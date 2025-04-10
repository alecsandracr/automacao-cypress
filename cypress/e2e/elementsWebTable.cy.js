describe('Interagindo com tabela', () => {

//      beforeEach(() => {
//     cy.visit('https://demoqa.com/webtables')
//     cy.get('.rt-table').should('be.visible')
//   })

    it(' Verificar se a tabela está visível', () => {
     
        cy.visit('https://demoqa.com/webtables')
   
        cy.get('.rt-table').should('be.visible')//Verifica se a tabela esta presente e visivel
     
        cy.get('.rt-tbody .rt-tr-group').should('have.length', 10)//Verificar a quantidade de linhas da tabela

    })

    it(' Verificar se um dado específico está presente', () => {
   
        cy.visit('https://demoqa.com/webtables')

        cy.get('.rt-table').should('be.visible')
   
        cy.contains('.rt-td', 'Cierra').should('exist')
        cy.contains('.rt-td', 'Vega').should('exist')
        cy.contains('.rt-td', '39').should('exist')
        cy.contains('.rt-td', 'cierra@example.com').should('exist')
        cy.contains('.rt-td', '10000').should('exist')
        cy.contains('.rt-td', 'Insurance').should('exist')

    })
    it('Verificar cadastro com sucesso e exibição do registro na tabela', () => {
   
        cy.visit('https://demoqa.com/webtables')
   
        cy.get('#addNewRecordButton').click()// Abre o modal para realizar o cadastro
        cy.get('.modal-content').should('be.visible')//Seleciona o modal e verifica se ele esta visivel na tela

        cy.get('#firstName').type('FristNametest')
        cy.get('#lastName').type('LastNametest')
        cy.get('#userEmail').type('teste@teste.com.br')
        cy.get('#age').type('13')
        cy.get('#salary').type('1200')
        cy.get('#department').type('Perfumaria')
        cy.get('#submit').click()


        cy.get('.rt-table').should('be.visible')
        cy.contains('FristNametest').should('exist')
        cy.contains('LastName').should('exist')
        cy.contains('teste@teste.com.br').should('exist')
        cy.contains('13').should('exist')
        cy.contains('Perfumaria').should('exist')
    })
    it('Verificar excluir um registro com sucesso', () => {
     
        cy.visit('https://demoqa.com/webtables')
        cy.get('.rt-table').should('be.visible')
        cy.contains('.rt-tr', 'Cierra').should('exist')
   
        cy.get('#delete-record-1').click()
   
        cy.contains('.rt-tr', 'Cierra').should('not.exist') //O nome deve sumir da tabela
    })

    it('Verificar a edição do registro com sucesso', () => {

        cy.visit('https://demoqa.com/webtables')
        cy.get('.rt-table').should('be.visible')
        cy.contains('.rt-tr', 'Alden').should('exist')
        cy.get('#edit-record-2').click()
        cy.get('#firstName').clear().type(' ')
     
        cy.get('#firstName').type('Ana')
        cy.get('#submit').click()

        cy.contains('.rt-tr', 'Ana', { timeout: 10000 }).should('exist')

    })
  
})