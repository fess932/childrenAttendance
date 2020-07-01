const moment = require('moment')
moment.locale('ru')

const { db } = require("./db.js");

function renderDays(r, w) {
    w.render('days', { days: db.get('days').value() })
}

function musterGet(r, w) {
    w.render('muster', {moment: moment, children: db.get('children').value()})
}

function musterPost(r, w) {
    console.log(r.body)
    let children = []

    let fullchilds = db.get('children').value()
    fullchilds.forEach(child => {
        if (r.body.children[child.id] === 'on') {
            child.attend = true
        }
        children.push(child)
    })

    db.get('days')
    .push({ id: r.body.id, date: r.body.date, children: children })
    .write()
    w.render('musterSuccess')
}

function getByID(r, w) {
    let data = db.get('days').find({id: r.params.id}).value()
    w.render('dayByID', {id: data.id, date: data.date, children: data.children})
}

module.exports = {
    renderDays,
    musterGet,
    musterPost,
    getByID
}