// support/index.js

// Configuração global do seletor
Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes']
  });
  

  import './customCommands';
  // Outras configurações de suporte podem seguir abaixo, se necessário.