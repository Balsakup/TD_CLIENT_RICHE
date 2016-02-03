var app = angular.module('App', []);

app.controller('ServicesController', [ '$http', function($http) {

    this.services      = {};
    this.promo         = {};
    this.count         = 0;
    this.total         = 0;
    this.discount      = 0;
    this.totalDiscount = 0;

    var self           = this;

    $http.get('services.json')
         .then(function(response) {

             self.services = response.data;

             readServices();

         });

    $http.get('promo.json')
         .then(function(response) {

             self.promo = response.data;

         });

    this.addService = function(service) {

        service.active = !service.active;

        readServices();

    };

    this.onChangeCode = function() {

        if (self.code in self.promo && self.useCode)
        {
            self.discount      = self.total * self.promo[self.code];
            self.totalDiscount = self.total - self.discount;
        }
        else
        {
            self.discount      = 0;
            self.totalDiscount = self.total;
        }

    };

    var readServices = function() {

        self.count    = 0;
        self.total    = 0;

        self.services.forEach(function(service) {

            if (service.active)
            {
                self.count++;
                self.total += service.price;
                self.totalDiscount = self.total;
            }

        });

    };

} ]);