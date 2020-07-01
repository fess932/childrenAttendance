const express = require('express')
const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

const children = require('./childrenHandlers.js')

const port = process.env.PORT || '8000'

app.get('/', function (r, w) {
  w.render('index')
})

app.get('/children', children.renderChildren)
app.get('/children/add', children.renderAddChildren)
app.post('/children/add', children.addChildren)

app.listen(port, (err) => {
  if (err) {
    return console.log('шото не так', err)
  }
  console.log(`server is listening on ${port}`)
})

// open browsen on start
// const opn = require('opn')
// opn(`http://localhost:${port}`)

// const requestHandler = (r, w) => {
//   console.log(r.url)
//   w.end('hello nodejs server')
// }

// const server = http.createServer(requestHandler)

// const adapter = new FileSync('db.json')
// const db = low(adapter)

// // Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], user: {}, count: 0 }).write()

// // Add a post
// db.get('posts').push({ id: 1, title: 'lowdb is awesome' }).write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode').write()

// // Increment count
// db.update('count', (n) => n + 1).write()

// server.listen(port, (err) => {
//   if (err) {
//     return console.log('шото не так', err)
//   }

//   console.log(`server is listening on ${port}`)
// })
