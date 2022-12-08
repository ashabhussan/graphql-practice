const mongoose = require('mongoose');
const { MONGODB_URI, MONGODB_URI_POSTFIX } = require('./env.config');
const DB_URL = `${MONGODB_URI}${MONGODB_URI_POSTFIX}`;

mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },

  (error) => {
    if (error) {
      console.error(`FAILED to connect using mongoose. ${error}`);
    } else {
      console.info(`Connected to DB server. ( ${DB_URL} )`);
    }
  }
);

module.exports = mongoose;
