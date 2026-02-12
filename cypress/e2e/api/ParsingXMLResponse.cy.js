import { parseString } from 'xml2js'

describe('API XML - POST Request', () => {

  it('Send XML payload', () => {

    const xmlBody = `
      <user>
        <name>John Doe</name>
        <job>QA Engineer</job>
      </user>
    `

    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      headers: {
        'Content-Type': 'application/xml',
        'Accept': 'application/xml'
      },
      body: xmlBody
    }).then((response) => {
      expect(response.status).to.eq(200)
    })

  })

  it('Parse XML response', () => {

    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/xml'
    }).then((response) => {

      parseString(response.body, (err, result) => {
        expect(err).to.be.null
        expect(result).to.have.property('slideshow')
      })

    })

  })

})
