//jshint esversion:6

/*
Require the following modules:
	"dotenv"
	"express"
	"body-parser"
	"https"
	"mongoose"
	"ejs"
	"lodash"
	"express-session"
	"passport"
	"passport-local-mongoose"
They should be installed using npm
Once installed they will be listed as dependencies in package.json
*/

require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require('path');
const $ = require('jquery');

/*
Require the following local modules
  "mongodb.js"
*/

const dbModel = require(__dirname + "/models/mongodb.js");

/*
Set up the server.
Use passport for authentication.
Connect to the MongoDB database using Mongoose.
*/

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/jquery', express.static(path.join(__dirname + '/node_modules/jquery/dist/')));
app.use(express.static(path.join(__dirname + '/public')));
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
Routes
*/

app.route("/")
  .get(function(req, res) {
    if (req.isAuthenticated()) {
      dbModel.findList(req.user.id, function(list) {
        if (list === null) {
          res.redirect("/");
        } else {
          dbModel.findLog(req.user.id, function(log) {
            if (log === null) {
              res.redirect("/");
            } else {
              res.render("view", {
                isLoggedIn: true
              });
            };
          });
        };
      });
    } else {
      res.render("view", {
        isLoggedIn: false
      });
    };
  });

app.route("/getdata")
  .get(function(req, res) {
    dbModel.findList(req.user.id, function(listItems) {
      dbModel.findLog(req.user.id, function(logItems) {
        listjson = JSON.stringify(listItems);
        listjsonarray = JSON.parse(listjson);
        logjson = JSON.stringify(logItems);
        logjsonarray = JSON.parse(logjson);
        res.json({
          list: listjsonarray,
          log: logjsonarray
        });
      });
    });
  });

app.route("/login")
  .post(function(req, res) {
    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
    passport.authenticate("local")(req, res, function(err) {
      if (err) {
        res.json({
          msg: 'error'
        });
      } else {
        res.json({
          msg: 'success'
        });
      };
    });
  });

app.route("/register")
  .post(function(req, res) {
    User.register({
      username: req.body.username
    }, req.body.password, function(err, user) {
      if (err) {
        console.log(err);
        res.json({
          msg: 'error'
        });
      } else {
        passport.authenticate("local")(req, res, function(err) {
          if (err) {
            res.json({
              msg: 'error'
            });
          } else {
            dbModel.findList(req.user.id, function(listItems) {
              dbModel.findLog(req.user.id, function(logItems) {
                res.json({
                  msg: 'success'
                });
              });
            });
          };
        });
      };
    });
  });

app.route("/logout")
  .post(function(req, res) {
    req.logout();
    res.json({
      msg: 'success'
    });
  });

app.route("/addListItem")
  .post(function(req, res) {
    dbModel.addListItem(req.body.name, req.body.id, req.user.id, function(err) {
      if (err) {
        res.json({
          msg: 'error'
        });
      } else {
        res.json({
          msg: 'success'
        });
      };
    });
  });

app.route("/addWorkStatusItem")
  .post(function(req, res) {
    dbModel.addWorkStatusItem(req.body.name, req.body.id, req.body.timeCompleted, req.user.id, function(err) {
      if (err) {
        res.json({
          msg: 'error'
        });
      } else {
        res.json({
          msg: 'success'
        });
      };
    });
  });

app.route("/completeItem")
  .post(function(req, res) {
    if (req.isAuthenticated()) {
      dbModel.completeItem(req.body.name, req.body.id, req.body.timeCompleted, req.user.id, function(err) {
        if (err) {
          res.json({
            msg: 'error'
          });
        } else {
          res.json({
            msg: 'success'
          });
        };
      });
    };
  });

app.route("/deleteItem")
  .post(function(req, res) {
    if (req.isAuthenticated()) {
      dbModel.deleteItem(req.body.id, req.user.id, function(err) {
        if (err) {
          res.json({
            msg: 'error'
          });
        } else {
          res.json({
            msg: 'success'
          });
        };
      });
    };
  });

/*
Tell the web server which port to listen to.
Use the port that is preconfigured by Heroku.
If the server is running locally use port 3000.
*/

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
