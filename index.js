const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const auth = require('./routes/auth');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] // if multiple keys, then randomly select one for security reason
  })
);

app.use(passport.initialize());
app.use(passport.session());

// equal to require('./routes/auth')(app);
auth(app);

/***********************************************************************************/
app.get("/api/testhi", (req, res) => {
  res.send({ hi: "there" });
});
/***********************************************************************************/

const PORT = process.env.PORT || 8888;

app.listen(PORT);
