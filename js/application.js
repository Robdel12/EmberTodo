window.Todos = Ember.Application.create();
if (Ember.testing){
  // How to get this to only run for tests?
  Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
  });
} else {
  Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://boiling-fire-1133.firebaseio.com")
  });
  Todos.ApplicationSerializer = DS.FirebaseSerializer.extend();
}
