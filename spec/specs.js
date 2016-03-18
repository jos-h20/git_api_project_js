var expect = require('chai').expect;
var Repo = require('./../js/repo.js').Repo;

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
  // it("will trigger a freakish alarm", function() {
  //   var currentProperty = "12:00";
  //   var setProperty = "12:00";
  //   var testClass = new Class(currentProperty, setProperty);
  //   expect(testClass.triggerAlarm(currentProperty, setProperty)).to.equal(true);
  // });
  // it("will trigger a freakish alarm", function() {
  //   var currentProperty = "12:00";
  //   var setProperty = "12:05";
  //   var testClass = new Class(currentProperty, setProperty);
  //   expect(testClass.triggerAlarm(currentProperty, setProperty)).to.equal(false);
  // });
});
