describe('Test Sencillo de la Web TodoMVC', () => {

    it('Comprobar que se puede crear 1 tarea', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
    })

    it('Comprobar que se puede marcar una tarea como completada', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.toggle').click()
        cy.contains('.todo-list li', 'Tarea 1').should('have.class', 'completed')
    })

    it('Comprobar que se puede desmarcar una tarea como completada', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.toggle').click()
        cy.contains('.todo-list li', 'Tarea 1').should('have.class', 'completed')
        cy.get('.toggle').click()
        cy.contains('.todo-list li', 'Tarea 1').should('have.class', '')
    })

    it('Comprobar que se puede editar una tarea existente', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1').dblclick()
        cy.get('.todo-list').type(' ha sido modificada{enter}')
        cy.get('.todo-list').contains('Tarea 1 ha sido modificada')
    })

    it('Comprobar que se puede borrar una tarea existente', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.destroy').click({ force: true })
        cy.get('.todo-list').should('not.include.text', 'Tarea 1')
    })

    it('Comprobar que funcionan correctamente los filtros', () => {
        cy.visit('https://www.todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.new-todo').type('Tarea 2{enter}')
        cy.get('.new-todo').type('Tarea 3{enter}')
        cy.get('.new-todo').type('Tarea 4{enter}')
        cy.contains('.todo-list li', 'Tarea 3').find('.toggle').click()
        cy.contains('.todo-list li', 'Tarea 4').find('.toggle').click()
        cy.get('a:contains("Completed")').click()
        cy.get('.todo-list').contains('Tarea 3')
        cy.get('.todo-list').contains('Tarea 4')
        cy.get('a:contains("Active")').click()
        cy.get('.todo-list').contains('Tarea 1')
        cy.get('.todo-list').contains('Tarea 2')
        cy.get('a:contains("All")').click()
    })

})