class EditBoard {
    get configureButton() {
        return cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo') 
    }
    get titleEdit() {
        return cy.get('input[name="name"]')
    }
    get descriptionEdit() {
        return cy.get('textarea[name="description"]')
    }
    get updateButton() {
        return cy.get('.vs-c-btn.vs-c-btn--primary.vs-c-btn--spaced.vs-c-btn-auth--top-gap.vs-u-font-weight-bold') 
    }

    clickConfigButton() {
        this.configureButton.click()
    }
    edit(title, description) {
        this.titleEdit.type(title)
        this.descriptionEdit.type(description)
    }
    clickUpdateButton() {
        this.updateButton.click()
    }

}
export const editBoard = new EditBoard()