
exports.up = function(knex, Promise) {
  // create contracts table
  return knex.schema.createTable('contracts', function(table) {
    // id, targetName, targetLocation, targetPhoto, securityLevel, clientName, budget, completed
    table.increments();
    table.string('targetName', 50);
    table.string('targetLocation', 50);
    table.string('targetPhoto', 150);
    table.integer('securityLevel', 50).notNullable().defaultTo(0);
    table.string('clientName', 50);
    table.integer('budget').notNullable().defaultTo(0);
    table.boolean('complete');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contracts');
};
