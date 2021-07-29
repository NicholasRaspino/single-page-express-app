//jshint esversion:6

const timeModel = require(__dirname + "/time.js");

const mongoose = require("mongoose");

const itemsSchema = {
  name: String,
  id: String,
  timeCompleted: String
};

const Item = mongoose.model("Item", itemsSchema);

const listSchema = {
  user: String,
  date: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

const logSchema = {
  user: String,
  date: String,
  isWorking: Boolean,
  isEditing: Boolean,
  items: [itemsSchema]
};

const Log = mongoose.model("Log", logSchema);

// Exports

module.exports.findList = function(user, callback) {
  List.findOne({
    user: user,
    date: timeModel.getCurrentDate()
  }, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          user: user,
          date: timeModel.getCurrentDate(),
          items: []
        });
        list.save();
        callback(null);
      } else {
        callback(foundList.items);
      };
    };
  });
};

module.exports.findLog = function(user, callback) {
  Log.findOne({
    user: user,
    date: timeModel.getCurrentDate()
  }, function(err, foundLog) {
    if (!err) {
      if (!foundLog) {
        const log = new Log({
          user: user,
          date: timeModel.getCurrentDate(),
          items: []
        });
        log.save();
        callback(null);
      } else {
        callback(foundLog.items);
      };
    };
  });
};

module.exports.addListItem = function(name, id, user, callback) {
  const item = new Item({
    name: name,
    id: id
  });
  List.findOne({
    user: user,
    date: timeModel.getCurrentDate()
  }, function(err, foundList) {
    foundList.items.unshift(item);
    foundList.save();
    callback(err);
  });
};

module.exports.completeItem = function(itemName, id, timeCompleted, user, callback) {
  List.findOneAndUpdate({
    user: user,
    date: timeModel.getCurrentDate()
  }, {
    $pull: {
      items: {
        id: id
      }
    }
  }, function(err, foundList) {
    if (!err) {
      Log.findOne({
        user: user,
        date: timeModel.getCurrentDate()
      }, function(err, foundLog) {
        const item = new Item({
          name: itemName,
          id: id,
          timeCompleted: timeCompleted
        });
        foundLog.items.unshift(item);
        foundLog.save();
        callback();
      });
    }
  });
};

module.exports.addWorkStatusItem = function(name, id, timeCompleted, user, callback) {
  Log.findOne({
    user: user,
    date: timeModel.getCurrentDate()
  }, function(err, foundLog) {
    const item = new Item({
      name: name,
      id: id,
      timeCompleted: timeCompleted
    });
    foundLog.items.unshift(item);
    foundLog.save();
    callback();
  });
};

module.exports.deleteItem = function(id, user, callback) {
  Log.findOneAndUpdate({
    user: user,
    date: timeModel.getCurrentDate()
  }, {
    $pull: {
      items: {
        id: id
      }
    }
  }, function(err) {
    callback();
  });
};
