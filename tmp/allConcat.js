var getRepos = require('./../js/get_repos.js').getRepos;

$(document).ready(function(){
  $('#date').text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
  $('#search_form').submit(function(event){
    event.preventDefault();
    $('#results').empty();
    getRepos();
  });
});
