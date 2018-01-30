const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();



// GET route to retreive all contracts
router.get('/contracts', function(req, res) {
  knex('contracts')
    .orderBy('id')
    .select('id', 'targetPhoto', 'targetName', 'clientName', 'targetLocation', 'budget', 'securityLevel')
    .then(function(contracts) {
      res.render('contracts/contractsall.ejs', {contracts});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to get blank form for a new contract, then POST to database
// below when form is submitted
router.get('/contracts/new', function(req, res) {
  knex('contracts')
    res.render('contracts/contractsnew.ejs')
})
// POST route to add a new contract
router.post('/contracts', function(req, res) {
  // req.body = {client: '', securityLevel: '', targetName: '', budget: 2, targetLocation: 'austin', assassin_id: 2}
  let assassinContract = {};
  assassinContract.assassinId = req.body.assassinId;
  delete req.body.assassinId;

  knex('contracts')
    .insert(req.body, '*')
    .then(function(result) {
      assassinContract.contractId = result.id;
      knex('assassincontracts').insert(assassinContract, '*')
      .then(function (result) {
        res.redirect('/contracts')
      })
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to retreive a specific contract
router.get('/contracts/:id', function(req, res) {
  knex('contracts')
    .select('id', 'targetPhoto', 'targetName', 'clientName', 'targetLocation', 'budget', 'securityLevel')
    .where('id', req.params.id)
    .then(function(contract) {
      res.render('contracts/contractsone.ejs', {contract});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to retreive data for assassinscontracts table
router.get('/contracts', function(req, res) {
  knex('contracts')
  .innerJoin('assassins', 'assassins.id', 'contracts.id')
  .select('assassins.fullName', 'assassins.codeName', 'assassins.rating', 'assassins.kills')
  .where('id', req.params.id)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
    res.sendStatus(500);
  });
});



// GET route to retreive data for selected assassin, the PATCH route
// below to update the database
router.get('/contracts/:id/edit', function(req, res) {
  knex('contracts')
    .select('id', 'targetPhoto', 'targetName', 'clientName', 'targetLocation', 'budget', 'securityLevel')
    .first()
    .where('id', req.params.id)
    .then(function(contract) {
      res.render('contracts/contractsedit.ejs', {contract});
  })
});
// PUT route to update an existing contract
router.put('/contracts/:id', function(req, res) {
  knex('contracts')
    .update({
      targetName: req.body.targetName,
      targetLocation: req.body.targetLocation,
      budget: req.body.budget
    }, '*')
    .where('id', req.params.id)
    .then(function(contracts) {
      // res.send(contracts);
      res.redirect('/contracts');
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// DELETE route to delete a contract
router.delete('/contracts/:id', function(req, res) {
  knex('contracts')
    .select('id')
    .where('id', req.params.id)
    .first()
    .del()
    .then(function(contracts) {
      res.redirect('/contracts')
      // res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});






module.exports = router;
