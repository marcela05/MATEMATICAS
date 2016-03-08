if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.body.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'submit .new-form': function(event, template){
      event.preventDefault();
      var _name= $('[name="fupInput"]').val();
      console.log("submit", _name);

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
