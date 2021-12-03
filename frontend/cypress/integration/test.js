describe("Visiting the home page", function() {
    it("checks if the first farm's title is present", function() {
        cy.visit("localhost:3000/")
        cy.contains("My Homestead")
    })
})

describe("Visiting a specific farm's page by entering a URL with a legitimate :id", function() {
    it("checks if the first farm's title is present", function() {
        cy.visit("localhost:3000/farms/1121619b-9a58-4d9a-9258-f623f086cfe6")
        cy.contains("My Homestead")
    })
})

describe("Visiting a specific farm's page by clicking on its card", function() {
    it("checks if the app navigates the correct url", function() {
        cy.visit("localhost:3000/")
        cy.contains("My Homestead")
            .click()
        cy.url()
            .should("include", "1121619b-9a58-4d9a-9258-f623f086cfe6")
    })
})

describe("Logging in", function() {
    it("checks if we can log into an already created account", function() {
        cy.visit("localhost:3000/login")

        cy.get("#email")
            .type("terry@yahoo.com")
            .should("have.value", "terry@yahoo.com")
        cy.get("#password")
            .type("12345")
            .should("have.value", "12345")
        cy.get(".MuiButton-root")
            .click()

        cy.contains("You are currently logged in.")
    })
})

describe("Signing up", function() {
    it("checks if we can sign up for an account and then log into it", function() {
        cy.visit("localhost:3000/sign-up")

        cy.get("#email")
            .type("john@gmail.com")
            .should("have.value", "john@gmail.com")
        cy.get("#password")
            .type("12345")
            .should("have.value", "12345")
        cy.get(".MuiButton-root")
            .click()
    })
    
    it("checks if we are redirected to login page", function() {
        cy.url()
            .should("include", "login")
    })
    
    it("logs into the newly created account", function() {
        cy.get("#email")
            .type("john@gmail.com")
            .should("have.value", "john@gmail.com")
        cy.get("#password")
            .type("12345")
            .should("have.value", "12345")
        cy.get(".MuiButton-root")
            .click()

        cy.contains("You are currently logged in.")
    })
})

