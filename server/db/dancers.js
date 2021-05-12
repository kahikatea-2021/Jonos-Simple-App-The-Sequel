const connection = require('./connection')

function getDancers (db = connection) {
    return db('dancer').select()
}

module.exports = {
    getDancers
}