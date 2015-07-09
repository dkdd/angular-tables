angular.module('User', [])
	. controller('UserController', ['$scope', function($scope){
		// Adding Users to Table
		$scope.users = [
			{ 'fname': 'Dor',
				'lname': 'Rubin',
				'email': 'd@r.com',
				'numberPuppies': 1
			},
			{ 'fname': 'Dasha',
				'lname': 'Murkovina',
				'email': 'd@m.com',
				'numberPuppies': 51
			},
			{ 'fname': 'Kelly',
				'lname': 'Stevens',
				'email': 'k@s.com',
				'numberPuppies': 50
			},
			{ 'fname': 'Drew',
				'lname': 'Garner',
				'email': 'd@g.com',
				'numberPuppies': 0
			}
		];
		
		$scope.addUser = function(){
			var defaultForm = {
				'fname' : '',
				'lname' : '',
				'email' : '',
				'numberPuppies' : ''
			};
			$scope.users.push({
				'fname': $scope.user.fname,
				'lname': $scope.user.lname,
				'email': $scope.user.email,
				'numberPuppies': $scope.user.numberPuppies
			});
			$scope.usersForm.$setPristine();
			$scope.user = angular.copy(defaultForm);
		};

		// Sorting/Searching
		$scope.sortType = 'fname';
		$scope.sortReverse = false;
		$scope.searchUser = '';

		
	}]);