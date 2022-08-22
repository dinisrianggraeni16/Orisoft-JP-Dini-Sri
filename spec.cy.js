describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get(':nth-child(1) > .form-control').type('Dini Sri Anggraeni')
    cy.get(':nth-child(2) > .form-control').type('dinisrianggraeniyusuf@gmail.com')
    cy.get('#exampleInputPassword1').type('admin123')
    cy.get('#exampleCheck1').click()
    cy.get('#exampleFormControlSelect1').select('Male')
    cy.get('#exampleFormControlSelect1').select('Female')
    cy.get(':nth-child(2) > .form-check-label').click()
    cy.get(':nth-child(3) > .form-check-label').click()
    cy.get(':nth-child(7) > :nth-child(4) > .form-check-label').click()
    cy.get(':nth-child(8) > .form-control').type('1999-04-16')
    cy.get('.btn').click()
  
  
    
  })  
  })
  
    

  

