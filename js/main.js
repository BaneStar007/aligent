'use strict';
var app = angular.module('aligent', []);

/// TBP = Time Based Problem, cannot solve given the lack of time to do so.

app.controller('aligentControl', function ($scope, $http, $timeout) {

    // Set up variables
    var apiKey = 'c18f83196bd4532eead800cd4e38ca1d';

    $scope.testOptions = {
        min: 3,
        max: 8,
        step: 0.5,
        precision: 1,
        orientation: 'horizontal',  // vertical
        handle: 'triangle', //'square', 'triangle' or 'custom'
        tooltip: 'show', //'hide','always'
        tooltipseparator: ':',
        tooltipsplit: false,
        enabled: true,
        naturalarrowkeys: false,
        range: false,
        ngDisabled: false,
        reversed: false
    };

    // Angular Variables
    $scope.beerData = "Loading";

    //Grab all the Beer - TBP (As of this commit, the API key is not unlocked, will await)
    $scope.listDataCall = function () {

        $http({
            method: 'GET',
            url: "http://api.brewerydb.com/v2/?key=" + apiKey,
            headers: { 'Content-Type': 'application/json' }
        }).then(listSuccessCallBack, listErrorCallBack);
    } // end of $scope.data

    $scope.dataCall = function () {

        // without working APIkey, this has yet to be populated.

        $http({
            method: 'GET',
            url: "http://api.brewerydb.com/v2/?key=" + apiKey,
            headers: { 'Content-Type': 'application/json' }
        }).then(listSuccessCallBack, listErrorCallBack);
    } // end of $scope.data

    function listSuccessCallBack(response) {
        $scope.beerList = response.data.data;
    }

    function listErrorCallBack(err) {
        console.log("error", err);

        $http.get("./data/beersmock.json")
            .then(function (response) {
                $scope.beerList = response.data.data;
            })

        // generic catch
        if (err.status == 503 || err.status == 403) {
            $scope.errModal();
        }

    }


    //Quick and Simple, click the beer in the list, use provided data to populate the field
    $scope.beerChoosen = function (beer) {
        $scope.beerChoice = beer;

    }

    //Filters List for the Filters search panel, when API is accessable, will adjust
    $scope.filtersList = [

        { name: "AleCategory", value: 1 }, // TBP would prefer to dynamically create this list
        { name: "AleStyle", value: 2 }
    ]

    $scope.filterAles = function () {
        // sift through the beerlist and 'hide' any values that don't match the check list.
        console.log($scope.formData.aleStyle);

        let listLength = $scope.beerList.length;

        for (let listId = 0; listId < listLength; listId++) {
            // console.log($scope.formData.aleStyle, $scope.beerList[listId].style.categoryId);

            // Does the Beer match the List Set requested
            if ($scope.beerList[listId].style.categoryId == $scope.formData.aleStyle) {
                $scope.beerList[listId].hide = false;
            } else { $scope.beerList[listId].hide = true }

            // Does the Beer come inside the parameters of the Slide?
        };
    }

    // In order to create dynamic labelling or any other adjustments to data
    $scope.formatData = function () {
        console.log("DataCheck", $scope.beerData);
        // what if abuMin and or ibuMax are undefined? - TBP
        $scope.beerData.stats = [{ name: "ABV", ave: Number($scope.beerData.abv) },
        { name: "IBU", ave: (Number($scope.beerData.style.ibuMin) + Number($scope.beerData.style.ibuMax)) / 2 },
        { name: "SRM", ave: (Number($scope.beerData.style.srmMin) + Number($scope.beerData.style.srmMax)) / 2 },
        { name: "OG", ave: Number($scope.beerData.style.ogMin) }];
    }





    // If the 
    function beerSuccessCallBack(response) {

        $scope.beerData = reponse.data.data;
        //console.log("success", response);

        $scope.formatData();

    };

    function beerErrorCallBack(err) {

        console.log("error", err);

        $http.get("./data/beersmock.json")
            .then(function (response) {
                $scope.beerData = response.data.data;


            }).then(function () {

                $scope.formatData();
            });



        // generic catch
        if (err.status == 503 || err.status == 403) {
            $scope.errModal();
        }
    };

    $scope.init = function () {

        $scope.listDataCall();

        //your code
    }

    $timeout($scope.init)


});


angular.module('aligent').directive('jsonText', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            function into(input) {
                return JSON.parse(input);
            }
            function out(data) {
                return JSON.stringify(data);
            }
            ngModel.$parsers.push(into);
            ngModel.$formatters.push(out);

        }
    };
});


// Carosell Code

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});

