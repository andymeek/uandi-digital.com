const config = require('../config')
const utils = require('../utils')

const routes = app => {
  config.isDevEnv = utils.isDev()

  app.get('/', (req, res) => {
    config.pageTitle =
      'Andy Meek - Full-Stack Developer | Mobile, tablet &amp; web - Sydney - U&amp;i Digital'
    config.bodyClass = 'home'
    config.pageDescription =
      'U&amp;i Digital is the company of Andy Meek - a UI/Front-End developer &amp; Consultant based in Sydney, Australia.'

    res.render('pages/index.ejs', {
      config: config
    })
  })

  app.get('/services', (req, res) => {
    config.pageTitle = 'UI/UX Development Services - U&amp;i Digital'
    config.bodyClass = 'services'
    config.pageDescription =
      'U&amp;i Digital creates multi-channel, cross-device, cross-platform websites &amp; web apps using the latest technologies &amp; methodologies.'

    res.render('pages/services.ejs', {
      config: config
    })
  })

  app.get('/recent-builds', (req, res) => {
    const recentBuilds = require('../data/recentBuilds.js')
    config.pageTitle = 'Recent builds - U&amp;i Digital'
    config.bodyClass = 'recent-builds'
    config.pageDescription = "U&amp;i Digital's portfolio."

    res.render('pages/recent-builds.ejs', {
      config,
      recentBuilds
    })
  })

  app.get('/contact', (req, res) => {
    config.pageTitle = 'Contact Andy Meek - U&amp;i Digital'
    config.bodyClass = 'contact'
    config.pageDescription =
      'Contact Andy Meek, the director of U&amp;i Digital via or email or filling in the brief form.'

    res.render('pages/contact.ejs', {
      config: config
    })
  })

  // Route not found -- Set 404
  app.get('*', (req, res) => {
    config.pageTitle = '404 - Page not found- U&amp;i Digital'
    config.bodyClass = 'home'

    res.render('pages/404.ejs', {
      config: config
    })
  })
}

module.exports = routes
