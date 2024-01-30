const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'aws-0-eu-central-1.pooler.supabase.com'),
        port: env.int('DATABASE_PORT', 6543),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres.uheglbvolqwnsofvstyn'),
        password: env('DATABASE_PASSWORD', '4BP8D.sxvx!Z.a+'),
        ssl: env.bool('DATABASE_SSL', false)
      },
      useNullAsDefault: true
    },
  }
})