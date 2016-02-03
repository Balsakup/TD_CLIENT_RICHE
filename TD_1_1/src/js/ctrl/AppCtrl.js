app.controller('AppCtrl', [function() {

    this.cacherInfo       = false;

    this.changeMessageNote = function() {
        this.cacherInfo  = false;
    };

    this.effacer = function() {
        this.messageNote = '';
        this.cacherInfo  = false;
    };

    this.sauvegarder = function() {
        this.cacherInfo      = true;
        this.messageSauvegarde = this.messageNote;
    };

    this.charger = function() {
        this.messageNote = this.messageSauvegarde;
    };

} ]);