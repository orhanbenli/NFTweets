describe('NFTweets Tests', () => {
    beforeEach(() => {
        cy.visit('https://nftweetsnft.netlify.app/#/')
    })
    it('Allows a user to NFTweet', () => {
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(1).click();
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(2).click();
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(3).click();
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(4).click();
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(5).click();
        cy.get('.q-btn--dense').click();
        cy.get('.text-h6').eq(0).click();
        cy.get('textarea').type('BallStreet!');
        cy.get('.q-btn--rounded').click();
        cy.get('.q-focusable.text-grey').eq(3).click();
    })
})
