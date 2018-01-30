
exports.seed = function(knex, Promise) {
  // Contracts table
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries for contracts
      return knex('contracts').insert([{
        targetName: 'Butch Coolidge',
        targetLocation: 'Los Angeles',
        targetPhoto: 'https://goo.gl/LCquZj',
        securityLevel: 3,
        clientName: 'Marcellus Wallace',
        budget: 40,
        complete: 'false'
      }, {
        targetName: 'The Jaguar',
        targetLocation: 'Russian Embassy',
        targetPhoto: 'https://goo.gl/6JWsiv',
        securityLevel: 9,
        clientName: 'Concerto',
        budget: 70,
        complete: 'false'
      }, {
        targetName: 'Norman Stansfield',
        targetLocation: 'Manhattan',
        targetPhoto: 'https://i.imgur.com/mdIk33E.jpg',
        securityLevel: 7,
        clientName: 'Mathilda',
        budget: 35,
        complete: 'false'
      }, {
        targetName: "Santino D'Antonio",
        targetLocation: 'Continental Hotel',
        targetPhoto: 'https://goo.gl/fUPkYy',
        securityLevel: 10,
        clientName: 'Winston',
        budget: 25,
        complete: 'false'
      }, {
        targetName: 'Sonny Valerio',
        targetLocation: 'Queens',
        targetPhoto: 'https://goo.gl/8DHYUS',
        securityLevel: 4,
        clientName: 'Ray Vargo',
        budget: 10,
        complete: 'false'
      }]);
    });

};
