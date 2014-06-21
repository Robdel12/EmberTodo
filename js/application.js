window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://boiling-fire-1133.firebaseio.com")
});
Todos.ApplicationSerializer = DS.FirebaseSerializer.extend();
