var expect = require('chai').expect;
var Repo = require('./../js/repo.js').Repo;
var time = require('./../js/time.js').time

describe("Repo", function() {
  it("will return the current property", function() {
    var repo_name = "Fred's repo";
    var repo_description = "A repo that creates an avatar of Fred";
    var testRepo = new Repo(repo_name, repo_description);
    expect(testRepo.repo_name).to.equal(repo_name);
  });
  it("will return the set property", function() {
    var repo_name= "Fred's repo";
    var repo_description= "A repo that creates an avatar of Fred";
    var testRepo = new Repo(repo_name, repo_description);
    expect(testRepo.repo_description).to.equal(repo_description);
  });
});
describe ("time", function() {
  it("will convert unix git time to a more readable format", function() {
    var unix_time = "2014-09-02T22:10:13Z";
    expect(time(unix_time)).to.equal("Tuesday, September 2nd 2014, 3:10 pm");
  })
})
