var apiKey = require('./../.env').apiKey;
var time = require('./../js/time.js').time;
// var Repo = require('./../js/repo.js').Repo;
exports.getRepos = function(){
  var user_name = $('#user_name').val();
  $.get('https://api.github.com/users/' + user_name + '/repos?access_token=' + apiKey).then(function(response){
console.log(response);
    for (var property of response) {
      $('#results').append('<h3>Repo Name: <em>' + property.name + '</em></h3></br>');
      $('#results').append('<h4>Repo Description:</h4></br><h4>' + property.description + '</h4></br>');
      $('#results').append('<h4>It was created on ' + time(property.pushed_at) + '.</h4></br>');
      $('#results').append('<h4>It was last updated on ' + time(property.updated_at) + '.</h4></br>');
    }

  }).fail(function(error){
    console.log("There was a big ole' error in trying to find that.");
  });
};
