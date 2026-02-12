describe('JSON Response Validation', () => {

  it('Validate JSON response', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('email')
        expect(response.body.id).to.eq(1)
        expect(response.body.name).to.eq('Leanne Graham')
        expect(response.body.email).to.contain('@')
        expect(response.body.address).to.have.property('city')
        expect(response.body.address.city).to.eq('Gwenborough')
        expect(response.body.address.geo.lat).to.eq('-37.3159')
        expect(response.body.id).to.be.a('number')
        expect(response.body.name).to.be.a('string')
        expect(response.body.email).to.be.a('string')
        expect(response.body.address).to.be.an('object')

      })
  })

})
