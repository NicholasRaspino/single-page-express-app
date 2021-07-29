let visitor = {
  list: [],
  log: [],
  isLoggedIn: false,
  isWorking: false,
  isEditing: false,
  changeLoggedInStatus: function() {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  },
  changeWorkingStatus: function() {
    if (this.isWorking) {
      this.isWorking = false;
    } else {
      this.isWorking = true;
    }
  },
  changeEditingStatus: function() {
    if (this.isEditing) {
      this.isEditing = false;
    } else {
      this.isEditing = true;
    };
  },
  getList: function() {
    return this.list;
  },
  getLog: function() {
    return this.log;
  },
  clearData: function() {
    this.list = [];
    this.log = [];
  },
  addSavedData: function(savedList, savedLog) {
    for (let savedItem of savedList) {
      let name = savedItem.name;
      let id = savedItem.id;
      let item = {
        name: name,
        id: id
      };
      this.list.push(item);
    };
    for (let savedItem of savedLog) {
      let name = savedItem.name;
      let id = savedItem.id;
      let timeCompleted = savedItem.timeCompleted;
      let item = {
        name: name,
        id: id,
        timeCompleted: timeCompleted
      };
      this.log.push(item);
    };
  },
  addListItem: function(name, id) {
    let newItem = {
      name: name,
      id: id
    };
    this.list.unshift(newItem);
  },
  addWorkStatusItem: function(name, id, timeCompleted) {
    let newItem = {
      name: name,
      id: id,
      timeCompleted: timeCompleted
    };
    this.log.unshift(newItem);
  },
  findListItemById: function(id) {
    let index = this.list.findIndex(x => x.id === id);
    return this.list[index];
  },
  completeItem: function(id) {
    let index = this.list.findIndex(x => x.id === id);
    if (index !== -1) {
      item = this.list[index];
      item.timeCompleted = timekeeper.getCurrentTime();
      this.log.unshift(item);
      this.list.splice(index, 1);
    };
  },
  deleteLogItem: function(id) {
    let index = this.log.findIndex(x => x.id === id);
    if (index !== -1) {
      this.log.splice(index, 1);
    };
  }
};
