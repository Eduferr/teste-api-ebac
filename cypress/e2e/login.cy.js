/// <reference types = "cypress"/>

describe('Teste de API - Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
              "email": "edu@qa.com",
              "password": "123456"
            }
    }).then((Response) =>{
      cy.log(Response.body.authorization)
      expect(Response.body.message).to.eql('Login realizado com sucesso')
      expect(Response.status).to.eql(200)
    })
  })
})