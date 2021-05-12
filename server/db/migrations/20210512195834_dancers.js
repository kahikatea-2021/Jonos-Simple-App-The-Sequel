
exports.up = function(knex) {
    return knex.schema.createTable('dancer', table => {
        table.increments('id')
        table.string('name')
        table.string('image')
    })
  
}

exports.down = function(knex) {
    return knex.schema.dropTable('dancer')
}
