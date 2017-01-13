flair.load_by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            var spritepos = data.shift();
            var flair_classes = ' flair-' + spritepos;
            var categories = '';

            for (var i = 0; i < data.length; i++)
            {
                flair_classes += ' flair-' + data[i];
                categories += data[i];
            }

            flair.by_id[key] = {
                key: key,
                spritepos: spritepos,
                categories: categories,
                flair_id: key,
                flair_name: flair.names[key],
                flair_classes: flair_classes
            }
        }
    }
}
flair.by_id = {}
flair.names = {
    /*========== Legion I - Dark Angels - AdeptusAstartes =========*/
    "0-0 LegionIDarkAngels AdeptusAstartes": "Angels of Absolution",
    "0-1 LegionIDarkAngels AdeptusAstartes": "Angels of Redemption",
    "0-2 LegionIDarkAngels AdeptusAstartes": "Angels of Vengeance",
    "0-3 LegionIDarkAngels AdeptusAstartes": "Angels of Vigilance",
    "0-4 LegionIDarkAngels AdeptusAstartes": "Consecrators",
    "0-5 LegionIDarkAngels AdeptusAstartes": "Dark Angels 1",
    "0-6 LegionIDarkAngels AdeptusAstartes": "Dark Angels 2",
    "0-7 LegionIDarkAngels AdeptusAstartes": "Death Wing 1",
    "0-9 LegionIDarkAngels AdeptusAstartes": "Death Wing 2",
    "0-9 LegionIDarkAngels AdeptusAstartes": "Disciples of Caliban",
    "1-0 LegionIDarkAngels AdeptusAstartes": "Guardians of the Covenant",
    "1-1 LegionIDarkAngels AdeptusAstartes": "Ravenwing 1",
    "1-2 LegionIDarkAngels AdeptusAstartes": "Ravenwing 2",
    "1-3 LegionIDarkAngels AdeptusAstartes": "Unforgiven",
    /*========== Legion IX - Blood Angels - AdeptusAstartes =========*/
    "0-0 LegionIXBloodAngels AdeptusAstartes": "Angels Encarmine",
    "0-1 LegionIXBloodAngels AdeptusAstartes": "Angels Penitent",
    "0-2 LegionIXBloodAngels AdeptusAstartes": "Angels Sanguine",
    "0-3 LegionIXBloodAngels AdeptusAstartes": "Angels Virmillion",
    "0-4 LegionIXBloodAngels AdeptusAstartes": "Blood Angels 1",
    "0-5 LegionIXBloodAngels AdeptusAstartes": "Blood Angels 2",
    "0-6 LegionIXBloodAngels AdeptusAstartes": "Blood Angels 3",
    "0-7 LegionIXBloodAngels AdeptusAstartes": "Blood Drinkers",
    "0-8 LegionIXBloodAngels AdeptusAstartes": "Blood Swords",
    "0-9 LegionIXBloodAngels AdeptusAstartes": "Blood Swords",
    "1-0 LegionIXBloodAngels AdeptusAstartes": "Carmine Blades",
    "1-1 LegionIXBloodAngels AdeptusAstartes": "Charnel Guard",
    "1-2 LegionIXBloodAngels AdeptusAstartes": "Death Company",
    "1-3 LegionIXBloodAngels AdeptusAstartes": "Flesh Eaters",
    "1-4 LegionIXBloodAngels AdeptusAstartes": "Flesh Tearers",
    "1-5 LegionIXBloodAngels AdeptusAstartes": "Lamenters",
    "1-6 LegionIXBloodAngels AdeptusAstartes": "Sons of Sanguinius",
    /*========== Adeptus Militarum =========*/
    "0-0 AdeptusMilitarum": "1st Kronus Regiment",
    "0-1 AdeptusMilitarum": "5th Arcadian",
    "0-2 AdeptusMilitarum": "7th Mordian",
    "0-3 AdeptusMilitarum": "8th Cadian",
    "0-4 AdeptusMilitarum": "13/5 Imperial Army",
    "0-5 AdeptusMilitarum": "99th Elysian Drop Troops",
    "0-6 AdeptusMilitarum": "Death Korps of Krieg",
    "0-7 AdeptusMilitarum": "Maccabian Janissaries",
    "0-8 AdeptusMilitarum": "Phantine Air Corps",
    "0-9 AdeptusMilitarum": "Praetorian Guard",
    "1-1 AdeptusMilitarum": "Tahnelion Airbourne",
    "1-2 AdeptusMilitarum": "Tanith First and Only 1",
    "1-3 AdeptusMilitarum": "Tanith First and Only 2",
    /*========== Tempestus Scions - Adeptus Militarum =========*/
    "0-0 TempestusScions AdeptusMilitarum": "22nd Thetoid Gryphonnes",
    "0-1 TempestusScions AdeptusMilitarum": "32nd Thetoid Eagles",
    "0-2 TempestusScions AdeptusMilitarum": "33rd Deltic Phoenixes",
    "0-3 TempestusScions AdeptusMilitarum": "34th Betic Centaurs",
    "0-4 TempestusScions AdeptusMilitarum": "34th Psian Vipers",
    "0-5 TempestusScions AdeptusMilitarum": "43rd Iotan Dragons",
    "0-6 TempestusScions AdeptusMilitarum": "54th Psian Jackals",
    "0-7 TempestusScions AdeptusMilitarum": "55th Alphic Hydras",
    "0-8 TempestusScions AdeptusMilitarum": "55th Kappic Eagles",
    "0-9 TempestusScions AdeptusMilitarum": "62nd Rhoin Cobras",
    "1-0 TempestusScions AdeptusMilitarum": "68th Deltic Lions",
    "1-1 TempestusScions AdeptusMilitarum": "73rd Epslic Eagles",
    "1-2 TempestusScions AdeptusMilitarum": "86th Deltic Dragons",
    "1-3 TempestusScions AdeptusMilitarum": "88th Alphic Lions",
    "1-4 TempestusScions AdeptusMilitarum": "101st Betic Dragons",
    "1-5 TempestusScions AdeptusMilitarum": "133rd Lambdan Lions",
};
