(function(){Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('contact');
Router.route('chat');
Router.route('about');


 
Router.route('apidemo');

Router.route('emergencyline');

Router.route('comments');
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 


Router.route('sponsors')

Router.route('EmergencyInformation')

Router.route('graphics')

}).call(this);
