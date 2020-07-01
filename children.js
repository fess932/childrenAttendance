const { db } = require('./db.js')

function addChildren(r, w) {
  console.log(r.body.name)
  db.get('children')
    .push({ name: r.body.name, surname: r.body.surname, id: r.body.id })
    .write()
  console.log(db.get('children').value())
  w.render('childrenSuccess')
}

function renderAddChildren(r, w) {
  w.render('addChildren')
}

function renderChildren(r, w) {
  // console.log(db.get('children').value())
  let children = []
  w.render('children', { children: db.get('children').value() })
}

module.exports = {
  addChildren: addChildren,
  renderAddChildren: renderAddChildren,
  renderChildren: renderChildren,
}
