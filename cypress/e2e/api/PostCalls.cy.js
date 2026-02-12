describe('POST API Tests', () => {

    it('Contoh 1 : Hardcode JSON di script', () => {
        cy.request({
        method: 'POST',
        url: '/posts',
        body: {
            title: 'Cypress POST Example',
            body: 'Belajar cara membuat post body',
            userId: 1,
        }
        }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('title', 'Cypress POST Example')
        })
    });

    it('Dynamic Generation Data', () => {
        const randomEmail = () => `user${Math.floor(Math.random() * 10000)}@test.com`

        cy.request({
        method: 'POST',
        url: '/users',
        body: {
            name: 'Test User',
            email: randomEmail(),
            job: 'Tester'
        }
        }).then((response) => {
        expect(response.status).to.eq(201)
        })
    });

    it.only('POST using fixture', () => {
        cy.fixture('user').then((payload) => {
        cy.request({
            method: 'POST',
            url: '/users',
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('reji')
        })
        })
    });
});