import { loginPage } from '../page_objects/login.js'
import { addBoard } from '../page_objects/addboard.js'
import { editBoard} from '../page_objects/editboard.js'

var token
var boardID

describe('zavrsni rad', () => {
    it('visit vivifystage login page and login', () => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/login').as('login')
        cy.visit('')
        cy.url().should('contain', '/login')
        loginPage.login('danijela13@gmail.com', '123456a.')
        loginPage.loginButton.click()
        cy.wait('@login').then(intercept => {
            expect(intercept.response.statusCode).to.eq(200)
            token = intercept.response.body.token
        })
    })

    beforeEach('Set token to local storage', () => {
        window.localStorage.setItem('token', token)
    })

    it('add board', () => {
        addBoard.addBoardButton.should('be.visible')
        addBoard.addBoardButton.click()
        addBoard.add('organizacija5', 'organizacija')
        addBoard.clickNextButton()
        addBoard.clickScrumRadio()
        addBoard.clickNextButton()
        addBoard.clickNextButton()
        addBoard.clickNextButton()
        addBoard.clickNextButton()
    })
    it('edit board', () => {
        editBoard.clickConfigButton()
        editBoard.edit('promena naziva', 'promena opisa')
        editBoard.updateButton.should('be.visible')
        editBoard.clickUpdateButton()
    })
    it('delete gallery', () => {
        cy.request({
            method: 'DELETE',
            url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardID}`,
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            expect(response.status).to.eq(200)
        })
    })
   
})
   
