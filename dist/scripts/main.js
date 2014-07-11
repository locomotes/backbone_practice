
var Alien = Backbone.Model.extend ({
	defaults: {
		name: '',
		location: 'Earth',
		native_planet: 'Mars'
	},

	idAttribute: "_id",

	initialize: function () {
		var name = this.get('name');
		console.log( name + ' is an Earth transplant.' );
	}

});

var ALLaliens = Backbone.Collection.extend ({
	model: Alien, 
	url: "http://tiy-atl-fe-server.herokuapp.com/collections/jon"
});

var all = new ALLaliens(); 



var allView = Backbone.View.extend({
	template: function(model){
		return _.template($('#alien_list').html());
	},

	el: $('.hero-unit ul'),

	initialize: function(){
		this.render();
		this.collection.on('change', this.render, this);
		this.collection.on('destroy', this.render, this);
	},

	render: function(){
		this.$el.html(this.template(this.collection))
	}

});

// var view = new allView(Allaliens);

all.fetch().done(function () {
	new allView( { collection: all} )

	all.each(function (s){
		s.set('location', 'Jupiter');
	});
	

});

// var martian = new Alien ({name: 'Martian'});
// ALLaliens.add(martian).save();

// var add = new martian();

// add.fetch();














