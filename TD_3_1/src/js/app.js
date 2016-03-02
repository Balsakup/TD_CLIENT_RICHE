var angular = require('angular');

var app = angular.module('CurrencyApp', []);

app.controller('CurrencyController', [ '$http', function($http) {

    var self        = this;
    self.currencies = {};
    self.from       = {};
    self.to         = {};
    self.what       = 1;
    self.result     = {};
    self.history    = false;
    self.histories  = [];

    $http.get('./currencymap.json').then(function(response) {

        self.currencies = response.data;
        self.from       = self.currencies['EUR'];
        self.to         = self.currencies['USD'];

    });

    self.swap = function() {

        var tmp   = self.from;
        self.from = self.to;
        self.to   = tmp;

    };

    self.getResult = function() {

        $http.jsonp('http://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + self.from.code + '_' + self.to.code + '&callback=JSON_CALLBACK').then(function (response) {

            self.result = self.what * response.data[self.from.code + '_' + self.to.code].val;

            self.histories.push({

                from   : self.from.code,
                to     : self.to.code,
                tx     : response.data[self.from.code + '_' + self.to.code].val,
                what   : self.what,
                result : self.what * response.data[self.from.code + '_' + self.to.code].val,
                date   : new Date(),
                delta  : self.what * response.data[self.from.code + '_' + self.to.code].val - self.what

            });

        });

    };

    self.toggleHistory = function() {

        self.history = !self.history;

    };

} ]);