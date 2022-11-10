const config = require('../config')

const remote = { url: config.remoteJbpmUrl, path: 'kie-server' }

const proxyCall = () => {
  return {
    mapUri: (req) => {
      const query = req.url.search ? req.url.search : ''
      const uri = `${remote.url}${req.url.pathname}${query}`
      console.log(`Proxying to ${uri}`)
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
      }
      return { uri, headers }
    },
    passThrough: true,
    xforward: true
  }
}

module.exports = [
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      proxy: proxyCall()
    }
  },
  {
    method: 'POST',
    path: '/{path*}',
    options: {
      payload: { parse: false }
    },
    handler: {
      proxy: proxyCall()
    }
  },
  {
    method: 'PUT',
    path: '/{path*}',
    options: {
      payload: { parse: false }
    },
    handler: {
      proxy: proxyCall()
    }
  }
]
