describe('GET Users API', () => {
  it('Should get list of users', () => {
    cy.request({
      method: 'GET',
      url: '/users?page=2'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.be.an('array')
    })
  })
})
