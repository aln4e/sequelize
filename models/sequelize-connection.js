//Since we're using Postgres as our database, this is a package that allows Sequelize to talk to a Postgres database.

let Sequelize = require('sequelize')

module.exports = new Sequelize( 'country', '','', {
  host: 'localhost',
  dialect: 'postgres',
  pool: { // the pool determines how many connections we can have at one time
    max: 5,
    min: 0
  }
})
