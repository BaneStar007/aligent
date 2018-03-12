'use strict';
var app = angular.module('aligent', []);

/* When Ready to make a Mobile Version of the site, So view sizes and such are not so cramped.
angular.module('aligent', []).config(function ($routeProvider) {
    // Magic sauce, immediate so the value is stored and we don't need to lookup every check
        var _isNotMobile = (function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return !check;
        })();
    
        // Swap out different HTML because you want to say, hide a video etc.
        $routeProvider
            .when('/', {
                templateUrl: (_isNotMobile )? 'views/MY_DESKTOP_VIEW.html':'views/m/MY_MOBILE_VIEW.html',
                controller: (_isNotMobile )?'MyHomeCtrl':'MyMobileCtrl'
              })
              .otherwise({
                redirectTo: '/'
              });
    }); */

/// TBP = Time Based Problem, cannot solve given the lack of time to do so.

app.controller('aligentControl', function ($scope, $http, $timeout) {

    // Set up variables
    var apiKey = 'c18f83196bd4532eead800cd4e38ca1d';

    $scope.filterSize = 3;

    window.mobilecheck = function () {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    $scope.abvOptions = {
        id: "ex2",
        min: 3,
        max: 8,
        step: 0.1,
        precision: 1,
        orientation: 'horizontal',  // vertical
        handle: 'custom', //'square', 'triangle' or 'custom'
        tooltip: 'show', //'hide','always'
        tooltipseparator: ':',
        tooltipsplit: false,
        enabled: true,
        naturalarrowkeys: false,
        range: false,
        ngDisabled: false,
        reversed: false
    };

    $scope.ibuOptions = {
        id: "ex2",
        min: 11,
        max: 23,
        step: 0.1,
        precision: 1,
        orientation: 'horizontal',  // vertical
        handle: 'custom', //'square', 'triangle' or 'custom'
        tooltip: 'show', //'hide','always'
        tooltipseparator: ':',
        tooltipsplit: false,
        enabled: true,
        naturalarrowkeys: false,
        range: false,
        ngDisabled: false,
        reversed: false
    };

    $scope.abvValue = {
        min: 4,
        max: 7,
        value: 5
    };

    $scope.ibuValue = {
        min: 4,
        max: 7,
        value: 5
    }

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
        { name: "All", value: 0 },
        { name: "Beers", value: 1 }, // TBP would prefer to dynamically create this list
        { name: "Ales", value: 2 },
        { name: "Stouts", value: 3 },
        { name: "Test4", value: 4 },
        { name: "Test5", value: 5 }
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
            // All List needs to clear all hide order
            if ($scope.formData.aleStyle == 0) { $scope.beerList[listId].hide = false; }
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


