var app = angular.module('ContactApp', []);

app.directive('contact', [ function() {

    return {

        restrict: 'EA',
        templateUrl: 'src/js/templates/contact.html'
    };

} ]);

app.controller('ContactController', [ function() {

    var self      = this;
    self.contacts = [

        {
            nom   : 'ZUCKERBERG',
            prenom: 'Mark',
            mail  : 'main@facebook.com'
        },
        {
            nom   : 'GATES',
            prenom: 'Bill',
            mail  : 'bill@microsoft.com'
        },
        {
            nom   : 'JOBS',
            prenom: 'Steeve',
            mail  : 'steeve@apple.com'
        }

    ];

    self.toUpdate = function(contact) {

        console.log('Hello')

    };

} ]);