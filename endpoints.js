// const form = require('./package/client/src/pages/Form/index')
let expression = true

module.exports = function (app) {

    /* NOTE: 100% automatic */
    // app.get('/', (req, res) => {
    //     res.setHeader('Content-Type')
    //     // const dataId = users.getUser(req.params.id)
    //     // const dataObj = users.getUser(req.query.obj)

    //     if (expression)
    //         return res.status(200).send(true)
    //     return res.status(404).send(false)
    // })

    app.get('/', (req, res) => {
        res.setBody('Content-Type')
        // const dataId = users.getUser(req.params.id)
        // const dataObj = users.getUser(req.query.obj)

        if (expression)
            return res.status(200).send(true)
        return res.status(404).send(false)
    })

    /* NOTE: 100% automatic */
    app.post('/automatic/users', (req, res) => {
        res.setHeader('Content-Type', 'application/xml')
        const data = users.addUser(req.query.obj)

        if (expression)
            return res.status(201).send(data)
        return res.status(500)
    })

    /* NOTE: Completing informations automaticaly obtaineds */
    app.post('/api/v1/register', (req, res) => {
        /*  #swagger.tags = ['User']
            #swagger.description = 'Endpoint to get the specific user.' */
        res.setHeader('Content-Type', 'application/json')
        const data = users.addUser(req.params.id)

        const doc = {
            definitions: {
              User: {
                name: 'Teste',
                intendedPosition: 'testando',
                birthDate: '11/11/1111',
                email: 'teste@teste.com',
                phone1: '(31) 9 9999-9999',
                cep: '30123-123',
                rua: 'Rua',
                bairro: 'Bairro',
                cidade: 'Cidade',
                estado: 'Estado',
                numero: '1',
              },
              AddUser: {
                $name: 'Teste',
                $intendedPosition: 'testando',
                $birthDate: '11/11/1111',
                $email: 'teste@teste.com',
                $phone1: '(31) 9 9999-9999',
                $cep: '30123-123',
                $rua: 'Rua',
                $bairro: 'Bairro',
                $cidade: 'Cidade',
                $estado: 'Estado',
                $numero: '1',
              },
            }}

        if (expression) {
                swagger.responses[200] = { 
                schema: { "$ref": "#/definitions/AddUser" },
                description: "User registered successfully." } 
            return res.status(200).send(data)
        }
        return res.status(404).send(false)    // #swagger.responses[404]
    })

    // /* NOTE: Completing informations automaticaly obtaineds */
    // app.post('/automatic_and_incremented/users', (req, res) => {
    //     res.setHeader('Content-Type', 'application/xml')
    //     /*  #swagger.tags = ['User']
    //         #swagger.description = 'Endpoint to add a user.' */

    //     /*  #swagger.parameters['obj'] = {
    //             in: 'body',
    //             description: 'User information.',
    //             required: true,
    //             schema: { $ref: "#/definitions/AddUser" }
    //     } */
    //     const data = users.addUser(req.body)

    //     if (expression) {
    //         // #swagger.responses[201] = { description: 'User registered successfully.' }
    //         return res.status(201).send(data)
    //     }
    //     return res.status(500)
    // })

    // /* NOTE: Function with callback referencied */
    // app.delete('/automatic_and_incremented/users/:id', myFunction1)

    // /* NOTE: Will be ignored in the build */
    // app.get('/toIgnore', (req, res) => {
    //     // #swagger.ignore = true
    //     res.setHeader('Content-Type', 'application/json')

    //     if (expression)
    //         return res.status(200).send(true)
    //     return res.status(404).send(false)
    // })

    // app.patch('/testmanual/users/:id', (req, res) => {
    //     /*  #swagger.auto = false

    //         #swagger.path = '/manual/users/{id}'
    //         #swagger.method = 'patch'
    //         #swagger.description = 'Endpoint added manually.'
    //         #swagger.produces = ["application/json"]
    //         #swagger.consumes = ["application/json"]
    //     */

    //     /*  #swagger.parameters['id'] = {
    //             in: 'path',
    //             description: 'User ID.',
    //             required: true
    //         }
    //     */

    //     /*  #swagger.parameters['obj'] = {
    //             in: 'query',
    //             description: 'User information.',
    //             required: true, 
    //             type: 'string'
    //         }
    //     */

    //     if (expression) {
    //         /* #swagger.responses[200] = { 
    //             schema: { "$ref": "#/definitions/User" }, description: "User found." }
    //         */
    //         return res.status(200).send(data)
    //     }
    //     // #swagger.responses[500] = { description: "Server Failure." }
    //     return res.status(500).send(false)
    // })

    // app.head('/security', (req, res) => {
    //     res.setHeader('Content-Type', 'application/json')
    //     /* #swagger.security = [{
    //         "petstore_auth": [
    //             "write_pets",
    //             "read_pets"
    //         ]
    //     }] */

    //     const dataObj = users.getUser(req.query.obj)

    //     if (expression)
    //         return res.status(200).send(true)
    //     return res.status(404).send(false)
    // })
}

function myFunction1(req, res) {
    const dataId = users.getUser(req.params.id)

    if (expression)
        return res.status(200).send(true)
    return res.status(404).send(false)
}