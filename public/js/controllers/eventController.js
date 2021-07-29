// DOM is ready to be manipulated by jQuery

$(document).ready(function() {
  viewController.initialSetup();
});

// User added a new to-do list item

$("#new-item").submit(function(e) {
  e.preventDefault();
  var name = $('#new-item-text').val();
  addNewListItemAndUpdateView(name);
});

// User is attempting to login to their account

$("#login-form").submit(function(e) {
  e.preventDefault();
  var username = $('#username').val();
  var password = $('#password').val();
  loginUserGetSavedDataAndUpdateView(username, password);
});

// User is attempting to register a new account

$("#register-form").submit(function(e) {
  e.preventDefault();
  var username = $('#proposed-username').val();
  var password = $('#proposed-password').val();
  registerUserAndUpdateView(username, password);
});

// User clicked the navigation button; options are login, logout, or back

$("#nav-button").click(function() {
  let buttonText = $("#nav-button").text();
  logOutIfRequestedAndUpdateView(buttonText);
});

// User clicked the button to either start working or stop working

$("#working-button").click(function() {
  addWorkStatusItemAndUpdateView();
});

// User clicked the button to either start editing or stop editing

$("#edit-button").click(function() {
  visitor.changeEditingStatus();
  viewController.changeEditingButton();
});

// User clicked the link to display the register section from the login section

$("#register-button").click(function() {
  viewController.changeSectionDisplayed("register");
});

// User clicked the link to display the login section from the register section

$("#login-button").click(function() {
  viewController.changeSectionDisplayed("login");
});

// User clicked a checkbox to complete a to-do list item

function completeItem(id) {
  completeListItemAndUpdateDisplay(id);
};

// User clicked a checkbox to delete a work log item while in editing mode

function deleteItem(id) {
  deleteLogItemAndUpdateDisplay(id);
};

// Helper functions

function addNewListItemAndUpdateView(name) {
  let id = calculator.getRandomId().toString();
  if (visitor.isLoggedIn) {
    ajaxController.addListItem(name, id);
  };
  visitor.addListItem(name, id);
  viewController.updateDisplay();
};

function loginUserGetSavedDataAndUpdateView(username, password) {
  let request1 = ajaxController.login(username, password);
  request1.done(function() {
    visitor.changeLoggedInStatus();
    visitor.clearData();
    let request2 = ajaxController.getData();
    request2.done(function(response) {
      visitor.addSavedData(response.list, response.log);
      viewController.loginWasSuccessful(true);
      viewController.updateDisplay();
    });
    request2.fail(function() {
      viewController.loginWasSuccessful(false);
    });
  });
  request1.fail(function() {
    viewController.loginWasSuccessful(false);
  });
};

function registerUserAndUpdateView(username, password) {
  let request = ajaxController.register(username, password);
  request.done(function(response) {
    if (response.msg == 'success') {
      visitor.changeLoggedInStatus()
      visitor.clearData();
      viewController.registerWasSuccessful(true);
      viewController.updateDisplay();
    } else {
      viewController.registerWasSuccessful(false);
    };
  });
  request1.fail(function() {
    viewController.registerWasSuccessful(false);
  });
};

function logOutIfRequestedAndUpdateView(buttonText) {
  switch (buttonText) {
    case "Login":
      viewController.changeSectionDisplayed("login");
      break;
    case "Logout":
      let request = ajaxController.logout();
      request.always(function() {
        visitor.changeLoggedInStatus()
        visitor.clearData();
        viewController.changeSectionDisplayed("lists");
        viewController.updateDisplay();
      });
      break;
    default:
      viewController.changeSectionDisplayed("lists");
  };
};

function addWorkStatusItemAndUpdateView() {
  let itemName;
  let id = calculator.getRandomId().toString();
  let timeCompleted = timekeeper.getCurrentTime().toString();
  if (visitor.isWorking === true) {
    itemName = "stopped working";
  } else {
    itemName = "started working";
  };
  if (visitor.isLoggedIn) {
    ajaxController.addWorkStatusItem(itemName, id, timeCompleted);
  };
  visitor.addWorkStatusItem(itemName, id, timeCompleted);
  visitor.changeWorkingStatus();
  viewController.changeWorkingButton();
  viewController.updateDisplay();
};

function completeListItemAndUpdateDisplay(id) {
  let item = visitor.findListItemById(id);
  if (visitor.isLoggedIn) {
    ajaxController.completeItem(item.name, id, timekeeper.getCurrentTime());
  };
  visitor.completeItem(id);
  viewController.updateDisplay();
};

function deleteLogItemAndUpdateDisplay(id) {
  if (visitor.isLoggedIn) {
    ajaxController.deleteItem(id)
  };
  visitor.deleteLogItem(id);
  viewController.updateDisplay();
};
