// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'killbaseinC',
      user:     'stevenfiero',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: 'ec2-184-72-228-128.compute-1.amazonaws.com',
  //     database: 'dbspcdttksero0',
  //     user:     'eigbmpwsmhgpvr',
  //     password: '4780654505c00439be6841fa9433673e71158a2793d14d0337c6c3f27e433eb9',
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './migrations'
  //   },
  //   seeds: {
  //     directory: './seeds'
  //   }
  // }

};
