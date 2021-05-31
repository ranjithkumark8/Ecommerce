const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  return mongoose.connect(process.env.BACKEND_DATABASE_KEY, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connect;
