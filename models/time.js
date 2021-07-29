//jshint esversion:6

// Exports

module.exports.getCurrentDate = function() {
  let today = new Date();
  let options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  let dateString = today.toLocaleDateString("en-us", options);
  return dateString;
}

module.exports.getCurrentTime = function() {
  let today = new Date();
  let options = {
    hour: "2-digit",
    minute: "2-digit"
  };
  let timeString = today.toLocaleTimeString("en-us", options);
  return timeString;
}
