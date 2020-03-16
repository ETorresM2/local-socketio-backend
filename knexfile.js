// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/server"
    },
    useNullAsDefault: "true",
    migrations: {
      directory: "./data/migrations"
    }
  }
};
