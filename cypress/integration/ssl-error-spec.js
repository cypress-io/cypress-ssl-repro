describe('Passing Tests', function(){
  it('Browse to "localhost" with visit()', function() {
    cy.visit('https://localhost:8443')
  })

  it('Browse to "localhost" with request()', function() {
    cy.request('https://localhost:8443')
  })

  it('Browse to "127.0.0.1" with visit()', function() {
    cy.request('https://127.0.0.1:8443')
  })

  it('Browse to "127.0.0.1" with visit() and get a 403', function() {
    cy.visit('https://127.0.0.1:8443/403')
  })
})

describe('Failing Tests', function(){
  it('Browse to "127.0.0.1" with visit()', function() {
    cy.visit('https://127.0.0.1:8443')
  })

  it('Browse to "127.0.0.1" with visit() and get a 200', function() {
    cy.visit('https://127.0.0.1:8443/200')
  })

  it('Browse to "127.0.0.1" with visit() and get a 307', function() {
    cy.visit('https://127.0.0.1:8443/307')
  })
})
