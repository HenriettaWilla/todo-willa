/* eslint-disable no-undef */

describe('Todo App', () => {
  beforeEach(() => {
    //cy.visit('/');
  });

  it('should add a new todo to the list', () => {
    cy.get('input.title').type('First todo')
    cy.get('input.description').type('This is my first todo')
    cy.get('select.status').type('DOING')
    cy.get('due-date').type('01/08/20')
    cy.get('.submit-btn').click()
   });

   it('Validate that the new todo has been created', () => {
     cy.get('.card .header').first().should('contain', 'First Todo')
     cy.get('.card .header .right-items').first().should('contain', '01/08/20')
     cy.get('.card .header .right-items label').first().should('contain', 'DOING')
     cy.get('.card .card-body').first().should('contain', 'This is my first todo')

    });

    it('delete todo when delete button is clicked', () => {
      cy.get('.delete-btn').click();
    })
    
    it('validate that the task has been deleted', () => {
      cy.get('col-sm-5').should('be empty');
    })
    
    
})


