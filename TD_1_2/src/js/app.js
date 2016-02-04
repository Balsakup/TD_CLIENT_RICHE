/** On déclare notre application AngularJS **/
var app = angular.module('App', []);

/*
* On déclare notre controller
* Ce controlleur utilise le service http ($http)
*/
app.controller('ServicesController', [ '$http', function($http) {

    this.services      = {};    // On initialise les services à vide
    this.promo         = {};    // On initialise les promo à vide
    this.count         = 0;     // On initialise la compteur de service à 0
    this.total         = 0;     // On initialise le total du prix à 0
    this.discount      = 0;     // On initialise le total de la réduction à 0
    this.totalDiscount = 0;     // On initialise le total du prix avec réduction à 0
    this.promoError    = false; // On dit qu'il n'y a pas d'erreur pour le code promo

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

    this.toggleService = function(service) {

        service.active = !service.active;

        readServices();

    };

    this.onChangeCode = function() {

        if (self.code in self.promo && self.useCode)
        {
            self.discount      = self.total * self.promo[self.code];
            self.totalDiscount = self.total - self.discount;
            self.promoError    = false;
        }
        else
        if (!(self.code in self.promo) && self.useCode)
        {
            self.promoError    = true;
        }
        else
        {
            self.discount      = 0;
            self.totalDiscount = self.total;
            self.promoError    = false;
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