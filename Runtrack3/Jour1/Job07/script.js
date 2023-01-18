function jourtravaille(date) {
    var joursFeries = [new Date("2020-01-01"), new Date("2020-04-13"), new Date("2020-05-01"), new Date("2020-05-08"), new Date("2020-07-14"), new Date("2020-08-15"), new Date("2020-11-01"), new Date("2020-11-11"), new Date("2020-12-25")];
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var année = date.getFullYear();
    var jourSemaine = date.getDay();
    var estJourFerie = joursFeries.some(function(jourFerie) {
        return jourFerie.getTime() === date.getTime();
    });
    if (estJourFerie) {
        console.log("Le " + jour + " " + mois + " " + année + " est un jour férié");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + jour + " " + mois + " " + année + " est un week-end");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + année + " est un jour travaillé");
    }
}
