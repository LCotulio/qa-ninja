var faker =  require('faker')
var cpf =  require('gerador-validador-cpf')

export default {

    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '04621001',
                street: 'Rua Joaquim Nabuco',
                number: '156',
                details: 'apto 25',
                district: 'Brooklin Paulista',
                city_state: 'São Paulo/SP'
            },
            delivery_method: {
                moto: 'Moto',
                bicicleta: 'Bicicleta',
                van_carro: 'Van/Carro'
            },
            file_cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
