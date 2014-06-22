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
  visit("/");
  fillIn("#new-todo", "New TODO");
  keyEvent("#new-todo", "keyup", 13);

  andThen(function() {
    equal(find("#todo-list li:last").text().trim(), "New TODO");
  });
});

test("Edit a todo", function() {
  visit("/");
  triggerEvent("#todo-list li:last label", "dblclick");
  fillIn("#todo-list li:last input", "New TODO EDIT");
  keyEvent("#todo-list li:last input", "keyup", 13);

  andThen(function() {
    equal(find("#todo-list li:last").text().trim(), "New TODO EDIT");
  });
});


test("Remove a todo", function() {
  visit("/");
  click("#todo-list li:last .destroy");

  andThen(function() {
    equal(find("#todo-list li").text().trim(), "");
  });
});
