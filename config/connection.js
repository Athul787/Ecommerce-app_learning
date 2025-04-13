// const mongoClient = require("mongodb").MongoClient;
// const state = {
//   db: null,
// };
// module.exports.connect = function (done) {
//   const url = "mongodb://localhost:27017";
//   const dbname = "shopping";

//   mongoClient.connect(url, (err, data) => {
//     if (err) return done(err);
//     state.db = data.db(dbname);
//     done();
//   });
// };

const mongoClient = require("mongodb").MongoClient;
const state = { db: null };

module.exports.connect = (connectionStatus) => {
  const url = "mongodb://127.0.0.1:27017";
  const dbName = "shopping";

  try {
    const client = new mongoClient(url);
    state.db = client.db(dbName);
    connectionStatus();
  } catch (error) {
    connectionStatus(error);
  }
};
module.exports.get = function () {
  return state.db;
};
