
exports.up = function(knex, Promise) {
  // create assassins table
  return knex.schema.createTable('assassins', function(table) {
    // id, fullName, codeName, weapon, contactInfo, rating, kills, price, age
    table.increments();
    table.string('fullName', 50);
    table.string('codeName', 50);
    table.string('weapon', 50).notNullable().defaultTo('None needed');
    table.string('contactInfo', 75).notNullable().defaultTo('Contact by fax');
    table.float('rating').notNullable().defaultTo(0);
    table.integer('kills').notNullable().defaultTo(0);
    table.integer('price').notNullable().defaultTo(0);
    table.integer('age');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assassins');
};
