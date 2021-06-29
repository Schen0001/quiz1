// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      datbase: 'clucks',
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds'
    }
  },


};
