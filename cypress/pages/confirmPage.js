class confirmPage {

    elements = {
        confirmText: () => cy.contains('Confirma la cuenta')
    }

}

module.exports = new confirmPage();