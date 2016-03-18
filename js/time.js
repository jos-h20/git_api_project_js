var moment = require('moment');

exports.time = function (unix_time) {
var time = moment(unix_time).format("dddd, MMMM Do YYYY, h:mm a");
return time;
};
