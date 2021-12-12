describe("Login Page ", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')     
    });

    it("should successsfully log in", () => {
      cy.get('button').eq(8).click()
      cy.get('a').click()
      cy.get('input').eq(0).type('1111@123.com')  
      cy.get('input').eq(1).type('123456') 
      cy.get('input').eq(2).type('123456') 
      cy.get('button').eq(9).click()
    })
  });