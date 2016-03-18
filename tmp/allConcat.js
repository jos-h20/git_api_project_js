var Repo = require('./../js/repo.js').Repo;
var getRepos = require('./../js/get_repos.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  $('#search_form').submit(function(event){
    event.preventDefault();
    $('#results').empty();
    $('#date').text(moment(
"2014-09-02T22:10:13Z").format("dddd, MMMM Do YYYY, h:mm a"));
    getRepos();
  });
});
