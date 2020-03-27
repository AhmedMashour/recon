/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const passport = require('passport');
const session = require('express-session');

module.exports = app => {
  const accessLogStream = fs.createWriteStream('logs/access.log', {
    flags: 'a'
  });

  app.use(logger('dev'));
  app.use(
    logger(
      '":method" - ":url" - "Status: :status" - ":response-time ms" - ":user-agent" - ":remote-addr" - ":date[iso]" - ":req[access_token]"',
      { stream: accessLogStream }
    )
  );
  // adding pass port config
  app.use(
    session({
      secret: 's3cr3t',
      resave: true,
      saveUninitialized: true
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  // end adding pass port config
  // app.use(express.static('uploads'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: function check(origin, callback) {
        console.log('origin', origin);
        if (!origin) {
          return callback(null, true);
        }
        const base = origin
          .replace('app.', '')
          .replace('admin.', '')
          .replace('http//', '')
          .replace('https//');
        const origins = new RegExp(`\\.${base.replace(/\./g, '\\.')}$`);
        console.log('regex', origins);
        return callback(null, origins);
      },
      credentials: true
    })
  );
};
