var Repo = require('./../js/repo.js').Repo;
var getRepos = require('./../js/get_repos.js').getRepos;
var moment = require('moment');
var apiKey = require('./../.env').apiKey;

// $(document).ready(function(){
//
//
//
//   });

$(document).ready(function(){
  $('#search_form').submit(function(event){
    event.preventDefault();

    getRepos();

  });
});
