var jourtravaille = function(date) {
    var holidays = [
    new Date(2020, 0, 1), // 1er janvier
    new Date(2020, 4, 1), // Fête du Travail
    new Date(2020, 4, 8), // Victoire 1945
    new Date(2020, 6, 14), // Fête Nationale
    new Date(2020, 7, 15), // Assomption
    new Date(2020, 10, 1), // Toussaint
    new Date(2020, 11, 25) // Noël
    ];
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    if (holidays.includes(date)) {
    console.log("Le " + date.getDate() + " " + month + " " + year + " est un jour férié");
    } else if (day === 0 || day === 6) {
    console.log("Non, " + date.getDate() + " " + month + " " + year + " est un week-end");
    } else {
    console.log("Oui, " + date.getDate() + " " + month + " " + year + " est un jour travaillé");
    }
    };

  

