
var app = angular.module( "assignment", [ ] );

/* The factory creates the various models for the application */

app.factory("employeeModel",function(){
	return new EmployeeModel();
});

app.factory("editEmpItemModel",function(){
		var items = [];
		var editItem = {};

	var modify = {};
	 modify.addItem = function(item) {
		items.push(item);
		return 'added item';
	};
	 modify.getItems = function() {
		return editItem;
	}
	 modify.setItems = function(item) {
		 this.editItem = item;
	}
	return modify; // returning this is very important
});

/*
 * This configures the routes and associates each route with a view and a controller
 */
app.config(function ($routeProvider)
{
		$routeProvider
				.when('/employees',
				{
					controller:'EmployeeControllers',
					templateUrl:'app/templates/EmployeeCRUD.html'
				}
				)
				 .when('/add',
				{
						controller:'EmployeeControllers',
						templateUrl:'app/templates/AddEmployee.html'
				})
				.when('/edit/:id',
				{
						controller:'EmployeeControllers',
						templateUrl:'app/templates/EditEmployee.html'
				})
				.otherwise({ redirectTo: '/employees' });
});






