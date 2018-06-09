const express = require('express')
const path = require('path')
const compress = require('compression')
const routes = require('./app/routes/core-routes')

const app = express()
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

// G-Zip the response
app.use(compress())

const wwwRedirect = (req, res, next) => {
  const { headers: { host }, originalUrl, protocol } = req
  if (host.slice(0, 4) === 'www.') {
    const newHost = host.slice(4)
    return res.redirect(301, protocol + '://' + newHost + originalUrl)
  }
  next()
}
app.set('trust proxy', true)
app.use(wwwRedirect)

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')))
// Set view path
app.set('views', path.join(__dirname, 'views'))
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs')

// Set up Routes for the application
routes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
