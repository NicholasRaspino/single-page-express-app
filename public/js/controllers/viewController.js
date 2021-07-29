let viewController = {
  loginAttempts: 0,
  initialSetup: function() {
    $("#current-date").text(timekeeper.getCurrentDate());
    let loginButtonText = $("#loginButton").text();
    if (loginButtonText === "Logout") {
      visitor.isLoggedIn = true;
      ajaxController.getdata();
    } else {
      visitor.isLoggedIn = false;
    };
    this.updateDisplay();
  },
  updateDisplay: function() {
    $('#new-item-text').val('');
    $('.item-form').remove();
    let itemList = visitor.getList();
    for (let item of itemList) {
      $('.list-item').append("<form id='item-form' class='item-form' method='post'><div class='box__row'><input class='checkbox' type='checkbox' name='checkbox' value='" + item.id + "' onChange='javascript:completeItem(this.value);'><p class='item'>" + item.name + "</p></div></form>");
    };
    $('.log-item-form').remove();
    let itemLog = visitor.getLog();
    if (visitor.isEditing) {
      $('#edit-button').val('Done');
      for (let item of itemLog) {
        $('.log-item').append("<form id='log-item-form' class='log-item-form' method='post'><div class='box__row'><input type='checkbox' name='delete-checkbox' class='delete-checkbox' value='" + item.id + "' onChange='javascript:deleteItem(this.value);'><div class='log-time-container'><p class='item'>" + item.timeCompleted + "</p></div><div class='log-item-container'><p class='item'>" + item.name + "</p></div></div></form>");
      };
    } else {
      $('#edit-button').val('Edit');
      for (let item of itemLog) {
        $('.log-item').append("<form id='log-item-form' class='log-item-form' method='post'><div class='box__row'><input hidden type='checkbox' name='delete-checkbox' class='delete-checkbox' value='" + item.id + "' onChange='javascript:deleteItem(this.value);'><div class='log-time-container'><p class='item'>" + item.timeCompleted + "</p></div><div class='log-item-container'><p class='item'>" + item.name + "</p></div></div></form>");
      };
    }
  },
  loginWasSuccessful: function(successful) {
    $('.login-message').remove()
    if (successful) {
      visitor.isLoggedIn = true;
      $('#main-section').removeAttr('hidden');
      $('#login-section').attr('hidden', true);
      $('#nav-button').text('Logout');
    } else {
      this.loginAttempts++
      $('.login-message-container').append("<p class='login-message'>" + "Unable to login. Please try again (" + this.loginAttempts + ")</p>")
    }
  },
  registerWasSuccessful: function(successful) {
    $('.register-message').remove()
    if (successful) {
      visitor.isLoggedIn = true;
      $('#main-section').removeAttr('hidden');
      $('#register-section').attr('hidden', true);
      $('#nav-button').text('Logout');
    } else {
      $('.register-message-container').append("<p class='register-message'>" + "Unable to register. Please try again.</p>")
    }
  },
  changeSectionDisplayed: function(section) {
    if (section == "login") {
      $("#main-section").attr("hidden", true);
      $("#register-section").attr("hidden", true);
      $("#login-section").removeAttr('hidden');
      $("#nav-button").text("Back");
    } else if (section == "register") {
      $("#main-section").attr("hidden", true);
      $("#login-section").attr("hidden", true);
      $("#register-section").removeAttr('hidden');
      $("#nav-button").text("Back");
    } else {
      $("#main-section").removeAttr('hidden');
      $("#login-section").attr("hidden", true);
      $("#register-section").attr("hidden", true);
      $("#nav-button").text("Login");
    };
  },
  changeWorkingButton: function() {
    let workingButtonText = $("#working-button").text();
    if (workingButtonText === "Start Working") {
      $("#working-button").text("Stop Working");
    } else {
      $("#working-button").text("Start Working");
    };
  },
  changeEditingButton: function() {
    let editButtonText = $("#edit-button").text();
    if (editButtonText === "Edit") {
      $("#edit-button").text("Done");
      $(".delete-checkbox").removeAttr('hidden');
    } else {
      $("#edit-button").text("Edit");
      $(".delete-checkbox").attr("hidden", true);
    };
  }
};
