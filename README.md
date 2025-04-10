#🧪 Projeto de Automação com Cypress

Este projeto contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validação de componentes da interface do site [demoqa.com](https://demoqa.com).

## 🚀 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/)
- JavaScript
- Node.js

## 📁 Estrutura do Projeto

automacao-cypress/ ├── cypress/ │ ├── downloads/ │ ├── e2e/ │ │ ├── elementsSCheckBox.cy.js │ │ └── elementsTextBox.cy.js │ ├── fixtures/ │ └── support/ │ ├── commands.js │ └── e2e.js ├── cypress.config.js ├── package.json ├── README.md

## 🧪 Casos de Teste Implementados

### ✅ CheckBox
- Selecionar uma opção específica (ex: "Documents") e validar o retorno.
- Marcar todas as opções e verificar se todas foram exibidas.
- Desmarcar e validar que o resultado foi limpo corretamente.

### ✅ TextBox
- Preenchimento e envio do formulário.
- Validação de campos obrigatórios e mensagens de erro.

### ✅ RadioButton
- Selecionar a opção "Yes" e validar que foi marcada corretamente.
-Selecionar a opção "Impressive" e validar que foi marcada corretamente.
-Verificar que a opção "No" está desabilitada para interação do usuário.

### ✅ WebTables
-Validar se um registro específico (ex: "Cierra Vega") está presente na tabela com todos os dados.
-Realizar o cadastro de um novo registro e verificar se ele aparece na tabela.
-Excluir um registro existente e validar que ele foi removido corretamente da tabela.
-Editar um registro e confirmar que os dados foram atualizados com sucesso.

## ▶️ Como Executar os Testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2.Instale as dependências:
  npm install

3.Execute os testes com Cypress:
 - modo interativo
    npx cypress open
 - Modo Headless (terminal)
    npx cypress run

💡 Dicas
Os testes estão localizados em cypress/e2e/.

Você pode adicionar mais testes e organizá-los por funcionalidade.

Utilize o DevTools (F12) para localizar seletor de elementos.

📝 Autor
Feito com 💙 por [Alecsandra Cardoso].


