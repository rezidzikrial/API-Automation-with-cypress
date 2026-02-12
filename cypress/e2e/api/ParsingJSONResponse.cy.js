describe('API Parsing JSON Response Body', () => {

  it('Parse simple JSON response', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {

        // Status Code
        expect(response.status).to.eq(200)

        // Parsing body
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('email')

        cy.log('User Name: ' + response.body.name)
        cy.log('User Email: ' + response.body.email)
      })
  })

  it('Parse nested JSON object', () => {
  cy.request('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {

      expect(response.body.address.city).to.eq('Gwenborough')
      expect(response.body.address.geo.lat).to.eq('-37.3159')

    })
})

    it('Parse JSON Array', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)

        // Ambil data pertama
        expect(response.body[0].name).to.exist

        cy.log('First User Name: ' + response.body[0].name)
        })
})

    it('Looping JSON response', () => {
    cy.request('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

        response.body.forEach((user) => {
            expect(user).to.have.property('id')
            expect(user).to.have.property('email')
        })

        })
})

    it('Parse POST response body', () => {
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
        title: 'Cypress API Test',
        body: 'Testing API Parsing',
        userId: 1
        }
    }).then((response) => {

        expect(response.status).to.eq(201)
        expect(response.body.title).to.eq('Cypress API Test')
        expect(response.body.userId).to.eq(1)

    })
})

it('Validate response schema', () => {
  cy.request('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {

      expect(response.body).to.have.all.keys(
        'id',
        'name',
        'username',
        'email',
        'address',
        'phone',
        'website',
        'company'
      )

    })
})



})
