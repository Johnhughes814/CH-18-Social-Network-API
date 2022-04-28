const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config({
//   path: require('find-config')('.env')
// });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://jh814:NEW_USER_PASSWORD@cluster0.8wjwl.mongodb.net/socialapi?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));