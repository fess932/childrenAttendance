function addChildren(r, w) {
  console.log(r.body)
  w.render('childrenSuccess')
}

function renderAddChildren(r, w) {
  w.render('addChildren')
}

function renderChildren(r, w) {
  w.render('children')
}

module.exports = {
  addChildren: addChildren,
  renderAddChildren: renderAddChildren,
  renderChildren: renderChildren,
}
