const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// const mainRoutes = require('./package/client/src/routes');

app.use(bodyParser.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// app.use('/', mainRoutes)

app.listen(3002, () => {
    console.log("Server is running!\nAPI documentation: http://localhost:3002/doc")
  })

require('./endpoints')(app)