
describe('HTTP Requests', () => {

    //Contoh GET API Test
    it('Get list users', () => {
        cy.request('GET', '/users').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.be.an('array')
      })
    });


    //Contoh POST API Test
    it('POST Create User', () => {
        cy.request({
        method: 'POST',
        url: '/posts',
        body: {
            title: 'API Testing',
            body: 'Belajar Cypress',
            userId: 1
        }
        }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        })
    });

    //Contoh PUT API Test
    it('PUT Update User', () => {
        cy.request({
        method: 'PUT',
        url: '/posts/1',
        body: {
            title: 'Update Title',
            body: 'Update Body',
            userId: 1
        }
        }).then((response) => {
        expect(response.status).to.eq(200)
        })
    });

    //Contoh DELETE API Test
    it.only('DELETE User', () => {
        cy.request({
        method: 'DELETE',
        url: '/posts/1'
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
    });

});
