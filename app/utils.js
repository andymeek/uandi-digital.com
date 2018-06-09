const utils = {}

utils.isDev = () =>
  !!(
    __dirname === '/Users/andrewmeek/node/www/uandi-digital/app' ||
    __dirname ===
      '/Users/andy.meek/Documents/work/clients/uandi-digital.com/app'
  )

module.exports = utils
