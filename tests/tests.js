// in order to see the app running inside the QUnit runner
Todos.rootElement = '#ember-testing';

// Common test setup
Todos.setupForTesting();
Todos.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(Todos, Todos.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    Todos.reset();
  }
});

// QUnit test case
test("Add a new todo", function() {
  // async helper telling the application to go to the '/' route
  visit("/");
  fillIn("#new-todo", "New TODO");
  keyEvent("#new-todo", "keyup", 13);

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("#todo-list li:last").text().trim(), "New TODO");
  });
});
