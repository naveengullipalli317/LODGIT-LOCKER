const mongoose = require('mongoose');
// Use native promises
mongoose.Promise = global.Promise;

// Connect to our mongo database;
mongoose.connect("mongodb+srv://Naveen:$jan123.@cluster0.ix48e.mongodb.net/test", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  throw err;
});