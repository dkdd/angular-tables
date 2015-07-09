## Why Use Angular

![WWE](./JovialSimilarAnchovy.gif)

1) Allows you to use declarative HTML to create a user interface by using `Directives`, special custom HTML tags which give behavior to HTML without needing to manipulate the DOM with Javascript. Basically this means you can template using HTML instead of something like Underscore or Mustache.

2) Filters allow for data formatting before it reaches the view. So things like removal of decimal places, or reordering an array can stand alone from the rest of your app's code. 

3) Because DOM and data manipulation are abstracted, less code needs to be written and controllers are left with one job: defining scope. They become the business logic behind the views only.

4) To keep the controller lean, business logic is independent of the view, i.e. the heavy lifting of the app, is done using `Services`, which stand alone as separate logic from your MVC.

### And why not...

1) Slows down the page when compared with leaner frameworks such as Backbone.


## Getting Started

### ng (core module)

ng is the core module of AngularJS which is loaded by default when an Angular application is started. It contains the following essential components:

- Core Functions (Global API)
- Directives
- Services
- Filters

Angular is primarily intended for making client side CRUD applications in a single page. Like Rails, it is heavy on convention as a means to abstract many of the lower-level common tasks. This means that it can be very opinionated, but it allows the developer to get up and running very quickly, with a minimal amount of boilerplate code that can be easily broken. 

![Angular app example](http://2.bp.blogspot.com/-Bkd_kg1j58w/VB8GAMsrlJI/AAAAAAAAA18/SwLbKHmKpxI/s1600/angular-js-HTML-compiler.gif)

### Modules

To define an Angular app, you must define an `angular.module`, which is simply a collection of functions that are run when the app is started.

You define a module in your Javascript file like this:

`var app = angular.module('myApp')`

Then, in the HTML, you instantiate the module like so:

`<html ng-app="myApp">`

This does not need to be placed on the `<html>` tag. Where ever the Angular application is instantiated in the HTML is where it begins working. This means it is very easy to include Angular as just one piece of a larger project by just having it operate in one area.

### Scope

In Angular, `$scope` is an object that ties a view (a DOM element) to the controller. In effect, scopes are the contextual glue that tie views and controllers together in Angular.

![scope image](https://dhananjay25.files.wordpress.com/2014/08/image_thumb11.png?w=624&h=207)

### Controller

To create scope, set up a controller in your Javascript file. Within this controller we will create an object which will serve as our model.

	app.controller('MyController', function($scope) {
	  $scope.person = {
	    name: "Dude Bro"
	  };
	});

As you can see, `$scope` is passed in as a function argument, and then the `person` object is attached to that scope.

Now, attach the controller to the DOM element using the `ng-controller` directive, comme ça:


	<div ng-controller="MyController">
	  {{ person.name }}
	</div>

Now, within this DOM element, we can access the `person` object that has been defined in the `My Controller` scope.


### Directives

Up until now we have shown *directives* - those things attached to HTML elements and begin with `ng` - without really going into what they are. 

Essentially they are just functions that can be tied to a DOM element. Some are predefined in the core Angular API, such as `ng-app` and `ng-model`; however, directives can also be custom created.

##### Expressions

Expressions, the `{{}}` items in the HTML, are a type of predefined directive that allow you to reference objects and variables attached to the controller scope of the current DOM element.

For example, the earlier code in which `{{person.name}}` was referenced which points back to:

	app.controller('MyController', function($scope) {
	  $scope.person = {
	    name: "Dude Bro"
	  };
	});

##### ng-model

`ng-model` lets us bind the value of an `<input>` element to the corresponding model in the controller. For example, if we use our previous `person` object, we could do something like this:

	<input ng-model="name" name="Name" placeholder="Enter your name"/>
	<h4>Your name: {{ name }}</h4>

Now, whatever is entered in the input box, will automatically be updated through the controller object, in the `<h4>` element where the `{{ name }}` expression is called.

##### ng-repeat

Another handy predefined directive is `ng-repeat`. This lets you build out elements by iterating over similar attributes of the model. 

Let's say say we have the following object in the controller:

	$scope.roommates = [
	  { name: 'Drew'},
	  { name: 'Dasha'},
	  { name: 'Dor'},
	  { name: 'Kelly'}
	];

In our HTML we can then write the following:

	<ul>
	  <li ng-repeat="person in roommates">{{ person.name }}</li>
	</ul>

This will take the first `<li>` as a template and then build out a list for each item in the `roommates` collection, giving you the following:

- Drew
- Dasha
- Dor
- Kelly

### Data Binding

`ng-model` works via Angular's use of two-way data binding.

One-way data binding has you explicitly define the merge

![one-way data bind](https://docs.angularjs.org/img/One_Way_Data_Binding.png)

Two-way data binding allows for the exchange to be implicit. Whenever the view is updated via an `<input>`, the model changes to reflect. On the other hand, if you change the model, the view updates as well.

![two-way data bind] (https://docs.angularjs.org/img/Two_Way_Data_Binding.png)

### Filters

Finally, filters are built in functions through which expressions can be piped. They allow for logic to be applied to data before it is rendered to the view. 

For example, if you change the code to say:

	<div ng-controller="MyController">
	  {{ person.name | uppercase }}
	</div>

then `"dude bro"` renders as `DUDE BRO`

or if you passed a number to an expression `{{12}}` but then used the `currency` filter, like so:

	{{12 | currency}}

you would get `$12.00`
