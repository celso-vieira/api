import path from 'path'

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(import.meta.dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    migrations: {
      directory: path.resolve(import.meta.dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  },
};
