class homeBimbauPage{
    elements = {
        signUpBtn: () => cy.contains('Regístrate'), 
        getItBtn: () => cy.contains('Entiendo'), 
    }

    clickRegister(){
        this.elements.signUpBtn().click({ force: true})
    }

    clickGetIt(){
        this.elements.getItBtn().click( {force: true})
    }
}

module.exports = new homeBimbauPage();