describe("Visiting the home page", function() {
    it("checks if the second farm's title is present", function() {
        cy.visit("localhost:3000/")
        cy.contains("Fresh Family Farms")
    })
})

describe("Visiting a specific farm's page by entering a URL with a legitimate :id", function() {
    it("checks if the first farm's title is present", function() {
        cy.visit("localhost:3000/farms/1")
        cy.contains("Dill's Pickle Farm")
    })
})

