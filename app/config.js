const Joi = require('joi')

const schema = Joi.object({
  port: Joi.number().default(3000),
  env: Joi.string().default('development'),
  isDev: Joi.boolean().default(false),
  remoteJbpmUrl: Joi.string().required()
})

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV === 'development',
  remoteJbpmUrl: process.env.REMOTE_JBPM_URL
}

const result = schema.validate(config, {
  abortEarly: false
})

if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}

module.exports = result.value
