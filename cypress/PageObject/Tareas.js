export class Tareas {
    constructor(){
        this.web = "https://todomvc.com/examples/react/dist/"
        this.tarea = " .new-todo"
        this.completed = '[data-testid="footer-navigation"] a:contains("Completed")'
        this.activar = '[data-testid="footer-navigation"] a:contains("Active")'
        this.label = ':nth-child(1) > .view > [data-testid="todo-item-label"]'
        this.label2 = ':nth-child(2) > .view > [data-testid="todo-item-label"]'
        this.label3 = ':nth-child(3) > .view > [data-testid="todo-item-label"]'
        this.click_Tarea = ':nth-child(1) > .view > [data-testid="todo-item-toggle"]'
        this.click_tarea2 = ':nth-child(3) > .view > [data-testid="todo-item-toggle"]'
        this.visible = '[data-testid="todo-item-label"]'
    };

    complete(){
        cy.visit(this.web)
        cy.get(this.tarea).type('tarea 1{enter}')
        cy.get(this.tarea).type('tarea 2{enter}')
        cy.get(this.tarea).type('tarea 3{enter}')
        cy.get(this.click_Tarea).click()
        cy.get(this.completed).click()
        cy.get(this.visible).should("be.visible")
    };

    active(){
        cy.visit(this.web)
        cy.get(this.tarea).type('tarea 1{enter}')
        cy.get(this.tarea).type('tarea 2{enter}')
        cy.get(this.tarea).type('tarea 3{enter}')
        cy.get(this.click_tarea2).click()
        cy.get(this.activar).click()
        cy.get(this.label).should("be.visible")
        cy.get(this.label2).should("be.visible")
        cy.get(this.label3).should("not.exist")
    };

    doble(){
        cy.visit(this.web)
        cy.get(this.tarea).should("be.visible").type('tarea 1{enter}')
        cy.get(this.tarea).should("be.visible").type('tarea 1{enter}')
    };
};

export const gestiontarea = new Tareas()