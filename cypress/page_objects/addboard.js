class AddBoard {
    get addBoardButton() {
        return cy.get('li[title="Add new Board"]')
    }
    get myOrganizationInput() {
        return cy.get('input[placeholder="Select"]')
    }
    get boardTitleInput() {
        return cy.get('input[name="name"]')
    }
    get nextButton() {
        return cy.get('button[name="next_btn"]')
    }
    get scrumRadio() {
        return cy.get('span[name="type_scrum"]')
    }
    

    
    clickAddBoardButton() {
        this.addBoardButton.click({force:true})
    }
    add(organization, title) {
        this.myOrganizationInput.type(organization)
        this.boardTitleInput.type(title)
    }
    clickNextButton() {
        this.nextButton.click()
    }
    clickScrumRadio() {
        this.scrumRadio.click()
    }

}

export const addBoard = new AddBoard()