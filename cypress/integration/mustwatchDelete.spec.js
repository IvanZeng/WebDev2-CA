let upComing ;

  describe("Upcoming Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env( "TMDB_KEY")}&language=en-US&page=1`
    )  
    .its("body")    // Take the body of HTTP response from TMDB
    .then((response) => {
      upComing= response.results
    })
})
    beforeEach(() => {
      cy.visit("/movies/upcoming")
    });
    describe("Movie Card Buttons", () => {
        it("should add movie to must watch movies page", () => {
          cy.get("button[aria-label='add to watch']").eq(0).click({force: true});
          cy.get("button[aria-label='add to watch']").eq(1).click({force: true});
          cy.get("button[aria-label='add to watch']").eq(2).click({force: true});
          cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click({force: true});
          cy.get("button[aria-label='remove from must watch']").eq(0).click({force: true});
        }); 
});
});