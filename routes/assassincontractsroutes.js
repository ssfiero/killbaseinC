const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();



// GET route to retreive the contracts associated with a specific assassin
router.get('/assassincontracts/:id', function(req, res) {
  knex('assassincontracts')
    .select('*')
    .join('contracts', 'assassincontracts.contractId', 'contracts.id')
    .where('assassincontracts.assassinId', req.params.id)
    .then(function(assassincontracts) {
      res.render(assassincontracts);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});






module.exports = router;
