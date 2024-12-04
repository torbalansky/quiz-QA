// Import commands.js using ES modules syntax
import './commands'

// Alternatively use CommonJS syntax:
// require('./commands')

// Add custom commands for drag and drop
Cypress.Commands.add('dragAndDrop', (dragSelector, dropSelector) => {
  cy.get(dragSelector)
    .trigger('dragstart')
  cy.get(dropSelector)
    .trigger('drop')
  cy.get(dragSelector)
    .trigger('dragend')
})

// Hide fetch/XHR requests from command log
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}
