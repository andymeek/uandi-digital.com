const config = require('../config')
const utils = require('../utils')

const routes = app => {
  config.isDevEnv = utils.isDev()

  app.get('/', (_, res) => {
    config.pageTitle =
      'DYNAMEEK- A Software Development &amp; Consultancy Services Company.'
    config.bodyClass = 'home'
    config.pageDescription =
      'An Application & API Development, Mobile Development, User Experience, Cloud Migration & Dev-Ops services company based in London.'
    const recentBuilds = require('../data/recentBuilds.js')
    res.render('pages/index.ejs', {
      config,
      recentBuilds
    })
  })

  // Route not found -- Set 404
  app.get('*', (req, res) => {
    config.pageTitle = '404 - Page not found - DYNAMEEK'
    config.bodyClass = 'home'

    res.render('pages/404.ejs', {
      config: config
    })
  })
}

module.exports = routes
