const path = require("path");
const dbPath = path.resolve(__dirname, "db/database.sqlite");

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("journal")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("journal", (table) => {
          table.increments("id").primary();
          table.string("color");
          table.string("entryDate");
        })
        .then(() => {
          console.log(`Table '${"journal"} created`);
        })
        .catch((error) => {
          console.error(
            `There was an error creating the '${"journal"} table: ${error}`
          );
        });
    }
  })
  .then(() => {
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });


module.exports = knex;
