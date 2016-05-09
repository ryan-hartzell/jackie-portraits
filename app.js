var app = angular.module('mainApp', ['ngMaterial']);

app.controller('mainController', function($scope, $mdMedia) {
	$scope.subjects = [
        { name: "00 Jacqueline Reed", active: false },
        { name: "01 Adam Fisher", active: false },
        { name: "02 Alex Roller", active: false },
        { name: "03 Alexis Perez", active: false },
        { name: "04 Alison Vincitore", active: false },
        { name: "05 Allison Larned", active: false },
        { name: "06 Ari Vasquez", active: false },
        { name: "07 Bailey Macejak", active: false },
        { name: "08 Briana Rice", active: false },
        { name: "09 Calvin Rezen", active: false },
        { name: "10 Charlotte F", active: false },
        { name: "11 Christian Cortes", active: false },
        { name: "12 Clara Wiest", active: false },
        { name: "13 Coleman Sisk", active: false },
        { name: "14 Covi Bannan", active: false },
        { name: "15 Elizabeth Kristian", active: false},
        { name: "16 Emily Hupp", active: false },
        { name: "17 Emma Meisel", active: false },
        { name: "18 Federica Borlenghi", active: false },
        { name: "19 Greydon Walker", active: false },
        { name: "20 Haley Buckner", active: false },
        { name: "21 Hayley Bruck", active: false },
        { name: "22 Imogen Thomas", active: false },
        { name: "23 Jarahn Cosby", active: false},
        { name: "24 Jenna Wagner", active: false },
        { name: "25 Juan Salcito", active: false },
        { name: "26 Jessica Polmeroy", active: false },
        { name: "27 Katie Teed-Arthur", active: false },
        { name: "28 Kyle Gavin", active: false },
        { name: "29 Lindsey Meyers", active: false },
        { name: "30 Lizzy Faire Cassidy", active: false },
        { name: "31 Lottie Gurvis", active: false },
        { name: "32 Malcolm Cills", active: false },
        { name: "33 Maleeha Hana", active: false },
        { name: "34 Maya Renee", active: false },
        { name: "35 Michelle Cage", active: false },
        { name: "36 Nadine Reumer", active: false },
        { name: "37 Sofia Gregory", active: false },
        { name: "38 Sonya Mathers", active: false },
        { name: "39 Stefania Bulbarella", active: false },
        { name: "40 Taylor Cozort", active: false },
        { name: "41 Tommy Shauver", active: false },
        { name: "42 Teresa Mae Lafferty", active: false },
        { name: "43 Uly Fraser", active: false }
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