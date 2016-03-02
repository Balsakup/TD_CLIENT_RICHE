var app = angular.module('ContactApp', []);

app.directive('contact', [ function() {

    return {

        restrict: 'EA',
        templateUrl: 'src/js/templates/contact.html'
    };

} ]);

app.controller('ContactController', [ function() {

    var self        = this;      // Pour accéder au controller depuis n'importe où
    self.contacts   = [          // Tableau des contacts existant

        {
            nom   : 'ZUCKERBERG',         // Créateur
            prenom: 'Mark',               // de
            mail  : 'mark@facebook.com'   // Facebook
        },
        {
            nom   : 'GATES',              // Créateur
            prenom: 'Bill',               // de
            mail  : 'bill@microsoft.com'  // Microsoft
        },
        {
            nom   : 'JOBS',               // Créateur
            prenom: 'Steeve',             // d'
            mail  : 'steeve@apple.com'    // Apple
        },
        {
            nom   : 'CATHERINE',          // Futur
            prenom: 'Quentin',            // Spoil
            mail  : 'quentin@netharia.fr' // ??
        }

    ];
    self.contact    = {};        // Variable contenant le contact à modifier
    self.tmpContact = {};        // Variable contenant le contact modifié par le formulaire
    self.operation  = 'Ajouter'; // Chaîne indiquant la modification ou l'ajout d'un contact
    self.edit       = false;     // Contrôle l'affichage du formulaire d'ajout/modification

    /**
     * Affiche le formulaire de modification du contact
     * @param contact
     */
    self.toUpdate = function(contact) {

        self.edit      = true;
        self.operation = 'Modifier';
        self.contact   = contact;

    };

    /**
     * Affiche le formulaire d'ajout d'un contact
     */
    self.toAdd = function() {

        self.edit      = true;
        self.operation = 'Ajouter';

    };

    /**
     * Ajoute le contact
     */
    self.add = function() {

        self.contacts.push(self.contact);

        self.contact = {};

    };

    /**
     * Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
     */
    self.update = function() {

        var index = self.contacts.indexOf(self.contact);

        self.contacts[index] = self.contact;
        self.contact         = {};

    };

    /**
     * Supprime de la liste le contact
     * @param contact
     */
    self.delete = function(contact) {

        var index = self.contacts.indexOf(contact);

        self.contacts.splice(index, 1);

    };

} ]);