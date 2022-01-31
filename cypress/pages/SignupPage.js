
class SignupPage {

    go() {
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        // INFORMAÇÔES PESSOAS DO ENTREGADOR
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        // INFORMAÇÔES DE ENDEREÇO DO ENTREGADOR
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        // VALIDAÇÃO DOS CAMPOS PREENCHIDOS NA BUSCA DO CEP
        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        // SELECIONANDO O TIPO DE ENTREGA (MOTO, BICICLETA, VAN/CARRO)
        cy.contains('.delivery-method li', deliver.delivery_method.moto).click()

        // IMPORTANDO IMAGEM DE CNH
        cy.get('input[accept^="image"').attachFile('/images/' + deliver.file_cnh)
    }

    submit() {
        cy.get('button[type="submit"][class="button-success"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        // VALIDANDO INFORMAÇÕES COM ERRO
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

export default new SignupPage;