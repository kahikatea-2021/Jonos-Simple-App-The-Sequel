
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dancer').del()
    .then(function () {
      // Inserts seed entries
      return knex('dancer').insert([
        {id: 1, name: 'Red', image: './images/red.gif'},
        {id: 2, name: 'Blue', image: './images/blue.gif'},
        {id: 3, name: 'Yellow', image: './images/yellow.gif'}
      ]);
    });
};
