const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);
const express = require('express');
const router = express.Router();



// GET route to retreive all assassins
router.get('/assassins', function(req, res) {
  knex('assassins')
    .orderBy('id')
    .select('id', 'fullName', 'codeName', 'weapon', 'contactInfo', 'rating', 'kills', 'price', 'age')
    .then(function(assassins) {
      console.log(assassins);
      res.render('assassins/assassinsall.ejs', {assassins});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to get blank form for a new assassin, then POST to database
// below when form is submitted
router.get('/assassins/new', function(req, res) {
  knex('assassins')
    res.render('assassins/assassinsnew.ejs');
})
// POST route to add a new assassin to the database
router.post('/assassins', function(req, res) {
  knex('assassins')
    .insert({
      fullName: req.body.fullName,
      codeName: req.body.codeName,
      weapon: req.body.weapon,
      contactInfo: req.body.contactInfo,
      rating: req.body.rating,
      kills: req.body.kills,
      price: req.body.price,
      age: req.body.age
    }, '*')
    .then(function(assassins) {
      res.redirect('/assassins');
    })
    .catch(function(err) {
      console.log(err);
      if (err) {
        res.redirect('/assassins');
      }
      res.sendStatus(500);
    });
});



// GET route to retreive a specific assassin
router.get('/assassins/:id', function(req, res) {
  knex('assassins')
    .select('id', 'fullName', 'codeName', 'weapon', 'contactInfo', 'rating', 'kills', 'price', 'age')
    .where('id', req.params.id)
    .then(function(assassin) {
      res.render('assassins/assassinsone.ejs', {assassin});
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to retreive data for selected assassin, the PATCH route
// below to update the database
router.get('/assassins/:id/edit', function(req, res) {
  knex('assassins')
    .select('id', 'fullName', 'codeName', 'weapon', 'contactInfo', 'rating', 'kills', 'price', 'age')
    .first()
    .where('id', req.params.id)
    .then(function(assassin) {
      res.render('assassins/assassinsedit.ejs', {assassin});
    })
});
// PUT route to update an existing assassin
router.put('/assassins/:id', function(req, res) {
  knex('assassins')
    .update({
      fullName: req.body.fullName,
      codeName: req.body.codeName,
      weapon: req.body.weapon,
      contactInfo: req.body.contactInfo,
      rating: req.body.rating,
      kills: req.body.kills,
      price: req.body.price,
      age: req.body.age
    }, '*')
    .where('id', req.params.id)
    .then(function(assassin) {
      // res.render({assassin});
      res.redirect('/assassins');
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// DELETE route to delete an assassin
router.delete('/assassins/:id', function(req, res) {
  knex('assassins')
    .select('id')
    .where('id', req.params.id)
    .first()
    .del()
    .then(function(assassins) {
      res.redirect('/assassins');
      // res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});






module.exports = router;
