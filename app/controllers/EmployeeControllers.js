

app.controller('EmployeeControllers', function ($scope, employeeModel,$routeParams, $filter)
{
	
		$scope.employeesList = employeeModel.employees;

		$scope.value = new Date(2013, 9, 22);

		var empid = parseInt($routeParams.id);


		if(empid > -1){
				$scope.editItem =  angular.copy(employeeModel.employees[empid -1])
				$scope.editItem.joiningDate = $filter("date")(Date.now(), 'yyyy-MM-dd');
			}

	 $scope.addEmp = function addEmployee(){
		alert("dadfads")
		 $scope.employeesList.
		 push({"name":this.name,"state":this.state,"joiningDate":this.joiningDate,"attritiondDate":this.attritiondDate});
		
		}

	 $scope.editSave = function saveEdit(empItem){
				var empList = $scope.employeesList
			for(var i in empList){
					if(empList[i].id == empItem.id ){
						 empList[i] = empItem;

					}
			}

	 }

	$scope.filter = {};

	 $scope.filterStates = function(state){
					 return $scope.filter[state.state] || isInclude($scope.filter);
		 
	 }

	function isInclude(filterObj) {
				for (var key in filterObj) {
						if (filterObj[key]) {
								return false;
						}
				}
				return true;
		}            

	 $scope.onAttritionDateChange = function(){
		//  this.employeeFrom.attritiondate.$setPristine()
		 // $scope.employeeFrom.attritiondate.$setViewValue("requried",false);
		 // $scope.employeeFrom.$setDirty();
			//$scope.employeeFrom.$setValidity('required', false);
	 }
	 $scope.states = [
				{"state":"AX"},
				{"state":"MN"},
				{"state":"IL"},
				
		];

});