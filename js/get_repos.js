var apiKey = require('./../.env').apiKey;
var time = require('./../js/time.js').time;

exports.getRepos = function(){
  var user_name = $('#user_name').val();
  $.get('https://api.github.com/users/' + user_name + '/repos?access_token=' + apiKey).then(function(response){
console.log(response);
    for (var property of response) {
      $('.index').show();
      $('#results').append('<h3>Repo Name: <strong>' + property.name + '</strong></h3></br>');
      $('#results').append('<h4>Repo Description:</h4><h4><em>' + property.description + '</em></h4></br>');
      $('#results').append('<p>It was <strong>created</strong> on ' + time(property.pushed_at) + '.</p>');
      $('#results').append('<p>It was last <strong>updated</strong> on ' + time(property.updated_at) + '.</p></br>');
      $('results').append('</hr>')
    }
  }).fail(function(error){
    console.log("There was a big ole' error in trying to find that.");
    console.log(error.responseJSON.message);
  });
};
