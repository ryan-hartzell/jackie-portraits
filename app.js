var app = angular.module('mainApp', ['ngMaterial']);

app.controller('mainController', function($scope, $mdMedia) {
	$scope.subjects = [
        { name: "06 Ari Vasquez", active: false },
        { name: "07 Bailey Macejak", active: false },
        { name: "08 Briana Rice", active: false },
        { name: "09 Calvin Rezen", active: false },
        { name: "10 Charlotte F", active: false },
        { name: "11 Christian Cortes", active: false },
        { name: "12 Clara Wiest", active: false },
        { name: "13 Coleman Sisk", active: false },
        { name: "14 Covi Bannan", active: false },
        { name: "16 Emily Hupp", active: false },
        { name: "17 Emma Meisel", active: false },
        { name: "18 Federica Borlenghi", active: false },
        { name: "19 Greydon Walker", active: false },
        { name: "20 Haley Buckner", active: false },
        { name: "21 Hayley Bruck", active: false },
        { name: "22 Imogen Thomas", active: false },
        { name: "24 Jenna Wagner", active: false },
        { name: "30 Lizzy Faire Cassidy", active: false },
        { name: "31 Lottie Gurvis", active: false },
        { name: "33 Maleeha Hana", active: false },
        { name: "34 Maya Renee", active: false },
        { name: "36 Nadine Reumer", active: false },
        { name: "38 Sonya Mathers", active: false },
        { name: "39 Stefania Bulbarella", active: false },
        { name: "41 Tommy Shauver", active: false },
        { name: "42 Teresa Mae Lafferty", active: false }
	];

    $scope.makeActive = function(index) {
        $scope.subjects[index].active = !$scope.subjects[index].active
    };
    
    $scope.getSource = function(subject) {
        if (subject.active)
            return "img/"+subject.name+"/02 Future/06 Exports/01.gif";
        return "img/"+subject.name+"/01 Present/04 PNG/01.png";
    }
});