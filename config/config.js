require('dotenv').config()
module.exports = {
  development: {
    database: 'wine_database',
    dialect: 'postgres',
    password: 'password'
  },
  test: {
    database: 'wine_database_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}