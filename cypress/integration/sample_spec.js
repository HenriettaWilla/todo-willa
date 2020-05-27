/* eslint-disable no-undef */

describe('Todo App', () => {
  beforeEach(() => {
    cy.visit(' http://localhost:8080/');
  });
  
  it('should add a new todo to the list', () => {
    cy.get('input.title').type('First todo')
    cy.get('input.description').type('This is my first todo')
    cy.get('[data-cy=select-input]').select('DOING')
    //cy.get('[data-cy=due-date]').type('01/08/20')
    // cy.get('[data-cy=due-date]').invoke('val').then((text) => {
    //   expect('08/05/2019').to.equal(text);
    // });
    cy.get('.submit-btn').click()
   });

   it('should check if there is text KANBAN + TODO = KANDO', () => {
     cy.get('[data-cy=kanban]').should('contain', 'KANBAN + TODO = KANDO')
   })

   it('Validate that the new todo has been created', () => {
     cy.get('[data-cy=display-title]').first().should('contain', 'First Todo')
     cy.get('.card .header .right-items').first().should('contain', '01/08/20')
     cy.get('.card .header .right-items label').first().should('contain', 'DOING')
     cy.get('.card .card-body').first().should('contain', 'This is my first todo')

    });

    it('delete todo when delete button is clicked', () => {
      cy.get('[data-cy=delete]').click();
    })
    
    // it('validate that the task has been deleted', () => {
    //   cy.get('col-sm-5').should('be empty');
    // })
    
    
})


