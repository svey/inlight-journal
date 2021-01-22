const knex = require("./../db");

exports.all = async (req, res) => {
  knex
    .select("*")
    .from("journal")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: `There was an error retrieving journal: ${error}` });
    });
};

exports.create = async ({ body: { color, entryDate } }, res) => {
  knex("journal")
    .insert({
      color,
      entryDate,
    })
    .then(() => {
      res.json({
        message: `'${color}' entry created.`,
      });
    })
    .catch((error) => {
      res.json({
        message: `${color} entry error: ${error}`,
      });
    });
};

exports.delete = async ({ body: { id } }, res) => {
  knex("journal")
    .where("id", id)
    .del()
    .then(() => {
      res.json({ message: `Entry ${id} deleted.` });
    })
    .catch((error) => {
      res.json({
        message: `Entry ${id} deletion error: ${error}`,
      });
    });
};

exports.reset = async (req, res) => {
  knex
    .select("*")
    .from("journal")
    .truncate()
    .then(() => {
      res.json({ message: "Journal reset." });
    })
    .catch((error) => {
      res.json({ message: `Journal reset error: ${error}.` });
    });
};
