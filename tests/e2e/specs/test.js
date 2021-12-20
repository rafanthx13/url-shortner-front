// https://docs.cypress.io/api/introduction/api.html

// https://imasters.com.br/front-end/cypress-vuejs-primeiros-passos

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Quasar URL Shortener')
    cy.get('q-btn').type('alfa')
  })
})
