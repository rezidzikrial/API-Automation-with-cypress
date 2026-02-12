describe('API Tests Headers & Cookies', () => {

    it('GET with custom headers', () => {
    cy.request({
      method: 'GET',
      url: '/posts',
      headers: {
        'Accept': 'application/json',
        'x-custom-header': 'qa-testing'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

   it('Set and get cookies', () => {

    cy.setCookie('session_id', 'abc123')

    cy.getCookie('session_id')
      .should('have.property', 'value', 'abc123')

    cy.clearCookie('session_id')

    cy.getCookie('session_id')
      .should('be.null')

  })

  it('GET with bearer token', () => {
    cy.request({
      method: 'GET',
      url: '/posts',
      headers: {
        Authorization: `Bearer ${Cypress.env('token')}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  before(() => {
  cy.getAuthToken()
})

it('Access secured endpoint', () => {
  cy.request({
    headers: {
      Authorization: `Bearer ${Cypress.env('token')}`
    },
    url: '/posts'
  }).then((response) => {
    expect(response.status).to.eq(200)
  })
})

});