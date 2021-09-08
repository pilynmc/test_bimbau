class registerPage{

    elements = {
        exitsSignUp: () => cy.contains('Registrarme'),
        emailInput: () =>  cy.get("input[name=email]"),
        documentTypeSelect: () => cy.contains("Cédula Ciudadanía"),
        documentNumberInput: () => cy.get("input[name=documentNumber]"),
        nameInput: () =>  cy.get("input[name=name]"),
        lastNameInput: () =>    cy.get("input[name=lastName]"),
        cellPhoneInput: () =>   cy.get("input[name=cellPhone]"),
        phoneInput: () =>   cy.get("input[name=phone]"),
        extInput: () =>  cy.get("input[name=ext]"),
        positionInput: () =>  cy.get("input[name=position]"),
        registerBtn: () => cy.contains('Registrarme'),
        errorMessage: ()  => cy.get('.ui red message'),
        recaptcha: () => cy.get("iframe[src*=recaptcha]")
    }

    typeEmail(email){
        this.elements.emailInput().type(email,{force:true})
    }
    tabEmail(){
        this.elements.emailInput().tab({shift: true, force:true})
    }
    typeEmailEmpty(){
        this.elements.emailInput().invoke('val', '')
    }

    SelectDocumentType(){
        this.elements.documentTypeSelect().click({force:true})
    }
    typeDocumentNumber(documentNumber){
        this.elements.documentNumberInput().type(documentNumber, { force: true })
    }
    typeDocumentNumberEmpty(){
        this.elements.documentNumberInput().invoke('val', null)
    }
    typeName(name){
        this.elements.nameInput().type(name, { force: true })
    }
    typelastName(lastName){
        this.elements.lastNameInput().type(lastName, { force: true })
    }
    typeCellPhone(cellPhone){
        this.elements.cellPhoneInput().type(cellPhone, { force: true })
    }
    typePhone(phone){
        this.elements.phoneInput().type(phone, { force: true })
    }
    typeExt(ext){
        this.elements.extInput().type(ext, { force: true })
    }
    typePosition(position){
        this.elements.positionInput().type(position, { force: true })
    }
    clickRegister(){
        this.elements.registerBtn().click({ force: true })
    }
    clickRecaptcha(){
        this.elements.recaptcha()
        .its("0.contentDocument")
        .should((d) => d.getElementById("recaptcha-token").click( {force: true}));
    }
    stringGen(cantidadcaracteres) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < cantidadcaracteres; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

}

module.exports = new registerPage();