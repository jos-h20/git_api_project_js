var Repo = require('./../js/repo.js').Repo;
var getRepos = require('./../js/get_repos.js').getRepos;
var moment = require('moment');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){



  });

$(document).ready(function(){
  $('#search_form').submit(function(event){
    event.preventDefault();

    var user_name = $('#user_name').val();

    $.get('https://api.github.com/users/' + user_name + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      console.log(response[0].name);
      console.log(response[0].description);

    }).fail(function(error){
      console.log("bummer");
    });





  });
});
