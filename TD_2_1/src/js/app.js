var app = angular.module('App', []);

app.controller('ListesController', [ '$http', function($http) {

    var self                   = this;
    self.dispoItems            = [];
    self.includedItems         = [];
    self.selectedDispoItems    = [];
    self.selectedIncludedItems = [];
    self.step                  = 1;

    $http.get('items.json')
        .then(function(response) {

            self.dispoItems = response.data;

        });

    this.addToIncluded = function() {

        self.selectedDispoItems.forEach(function(item) {

            self.includedItems.push(item);
            self.dispoItems.splice(self.dispoItems.indexOf(item), 1);

        });

    };

    this.addAllToIncluded = function() {

        self.dispoItems.forEach(function(item) {

            self.includedItems.push(item);

        });

        self.dispoItems = [];

    };

    this.removeFromIncluded = function() {

        self.selectedIncludedItems.forEach(function(item) {

            self.dispoItems.push(item);
            self.includedItems.splice(self.includedItems.indexOf(item), 1);

        });

    };

    this.removeAllFromIncluded = function() {

        self.includedItems.forEach(function(item) {

            self.dispoItems.push(item);

        });

        self.includedItems = [];

    };


} ]);