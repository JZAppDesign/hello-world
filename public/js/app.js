console.log("hello world")


$(document).ready(function() {

  var HelloView = Backbone.View.extend({
    render: function() {
      $(this.el).html("hello world!");
    }
  });

  new HelloView({el:"#application"}).render();
});