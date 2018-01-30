
exports.up = function(knex, Promise) {
  // create assassinContracts table
  return knex.schema.createTable('assassincontracts', function(table) {
    // assassinId, contractId
    table.integer('assassinId', 40);
    table.integer('contractId', 40);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assassincontracts');
};
