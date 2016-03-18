var apiKey = require('./../.env').apiKey;
// var Repo = require('./../js/repo.js').Repo;
exports.getRepos = function(){
  var user_name = $('#user_name').val();
  $.get('https://api.github.com/users/' + user_name + '/repos?access_token=' + apiKey).then(function(response){

    $('#results').text('');
    for (var property of response) {
      $('#results').append('<h2>Repo Name: ' + property.name + '</h2></br>');
      $('#results').append('<h2>Repo Description: ' + property.description + '</h2></br>');
      // $('#results').append('<hr>');
    }
    // var repos = response;
    // console.log(repos);
    // for (var i = 0; i <= response.length; i++) {
    // var repo_name = response[i].name;
    // var repo_description = response[i].description;

    // newRepo = new Repo(repo_name, repo_description);
    // $('#repo_name').append("Repo Name: " + newRepo.repo_name + newRepo.repo_description);
    // console.log(repo_name);
    // console.log(repo_description);
    // console.log(newRepo);

    // }

  }).fail(function(error){
    console.log("There was a big ole' error in trying to find that.");
  });
};
