let ajaxController = {
  login: function(username, password) {
    return $.ajax({
      url: '/login',
      method: 'post',
      dataType: 'json',
      data: {
        'username': username,
        'password': password
      }
    });
  },
  register: function(username, password) {
    return $.ajax({
      url: '/register',
      method: 'post',
      dataType: 'json',
      data: {
        'username': username,
        'password': password
      }
    });
  },
  logout: function() {
    return $.ajax({
      url: '/logout',
      method: 'post',
      dataType: 'json'
    });
  },
  getData: function() {
    return $.ajax({
      url: '/getdata',
      method: 'get',
      dataType: 'json'
    });
  },
  addListItem: function(name, id) {
    $.ajax({
      url: '/addListItem',
      method: 'post',
      dataType: 'json',
      data: {
        'name': name,
        'id': id
      }
    });
  },
  addWorkStatusItem: function(name, id, timeCompleted) {
    $.ajax({
      url: '/addWorkStatusItem',
      method: 'post',
      dataType: 'json',
      data: {
        'name': name,
        'id': id,
        'timeCompleted': timeCompleted
      }
    });
  },
  completeItem: function(name, id, timeCompleted) {
    $.ajax({
      url: '/completeItem',
      method: 'post',
      dataType: 'json',
      data: {
        'name': name,
        'id': id,
        'timeCompleted': timeCompleted
      }
    });
  },
  deleteItem: function(id) {
    $.ajax({
      url: '/deleteItem',
      method: 'post',
      dataType: 'json',
      data: {
        'id': id
      }
    });
  }
};
