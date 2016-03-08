if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click input.btn': function () {
      //var btn = $(document.activeElement);
      var anterior= $('input:text[name=valores]').val();
      var btn = $(document.activeElement);
      formulario.getElementsByTagName('input')[0].value=anterior+btn.val();
    },
    'click input.btnbor': function () {
      formulario.getElementsByTagName('input')[0].value="";
    }, 
     'click input.btnigual': function () {
      var anterior= $('input:text[name=valores]').val();
      formulario.getElementsByTagName('input')[0].value=eval(anterior);
    }

    /*'submit form': function(event, template) {
        var valor = template.$("input#valores").val();
        
      }*/
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
