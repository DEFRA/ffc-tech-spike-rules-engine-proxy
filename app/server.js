const hapi = require('@hapi/hapi')
const H2o2 = require('@hapi/h2o2')
const config = require('./config')

async function createServer () {
  const server = hapi.server({
    port: config.port,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  await server.register(H2o2)
  await server.register(require('./plugins/router'))

  return server
}

module.exports = createServer
