const children = require('./children.js')
const days = require('./days.js')

const path = require('path')
const express = require('express')
const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const port = process.env.PORT || '8000'

app.get('/', function (r, w) {
  w.render('index')
})

app.get('/children', children.renderChildren)
app.get('/children/add', children.renderAddChildren)
app.post('/children/add', children.addChildren)

app.get('/days', days.renderDays)
app.get('/days/byid/:id', days.getByID)
app.get('/days/muster', days.musterGet)
app.post('/days/muster', days.musterPost)

app.listen(port, (err) => {
  if (err) {
    return console.log('произошла ошибка при запуске', err)
  }
  console.log(`приложение доступно по адресу http://localhost:${port}`)
})
