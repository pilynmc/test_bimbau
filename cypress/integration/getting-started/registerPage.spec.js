import registerPage from "../../pages/registerPage";
import homeBimbauPage from "../../pages/homeBimbauPage";
import confirmPage from "../../pages/confirmPage";
/// <reference types="cypress" />

describe('Prueba de Registro Bimbau', () => {

    it("Debería Cargar el Sitio Bimbau", () => {
        cy.visit("https://app.bimbau.co/");
    });

    it("Debería ir al formulario de registro", () => {
       homeBimbauPage.clickRegister()       
    });

    it("Debería asegurar que se ingrese al formulario de registro ", () => {
      homeBimbauPage.clickGetIt()
      registerPage.elements.exitsSignUp().should('be.visible');
    });

    it("Debería llenar el formulario", () => {
        registerPage.typeEmail("juan.perez" + registerPage.stringGen(3) + "@example.com")
        registerPage.SelectDocumentType()
        registerPage.typeDocumentNumber(44141828)
        registerPage.typeName("Carlos Suárez")
        registerPage.typelastName("Gómez Hernandez.")
        registerPage.typeCellPhone("3128286373")
        registerPage.typePhone("44154224")
        registerPage.typeExt("115")
        registerPage.typePosition("Administrador")
     });

     it("Debería presentar Campo captcha como requerido cuando se oprima el botón registrarme", () => {        
        registerPage.clickRegister()
        registerPage.elements.exitsSignUp().should('be.visible')
     });  

     it("Debería dar click sobre el campo recaptcha", () => {               
        registerPage.clickRecaptcha()        
     }); 

     it("Debería registrar el formulario", () => {               
        registerPage.clickRegister()      
     });     

     it("Debería presentar Confirma la cuenta si el registro fue exitoso", () => {        
        registerPage.clickRegister()
        confirmPage.elements.confirmText().should('be.visible')
     });


});