/* FLAIR MASTER CONFIG | auto-generated at 2019-11-30T12:13:40-0700 (ISO-8601) */ 
flair.loadById = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            var spritepos = data.shift();
            var flairClasses = ' flair-' + spritepos;
            flairClasses += ' flair-' + data[0];
            var categories = '';

            for (var i = 0; i < data.length; i++)
            {
                categories += data[i];
            }

            flair.byId[key] = {
                key: key,
                spritepos: spritepos,
                categories: categories,
                flairId: key,
                flairName: flair.names[key],
                flairClasses: flairClasses
            }
        }
    }
}
flair.byId = {}
flair.names = {
    "0-0 AdeptusTerra ImperiumOfMan": "Imperium of Man",
    "0-1 AdeptusTerra ImperiumOfMan": "Imperium of Man",
    "0-2 AdeptusTerra ImperiumOfMan": "Imperium of Man",
    "0-3 AdeptusTerra ImperiumOfMan": "Adeptus Terra",
    "0-4 AdeptusTerra ImperiumOfMan": "Adeptus Administratum",
    "0-5 AdeptusTerra ImperiumOfMan": "Adeptus Arbites",
    "0-6 AdeptusTerra ImperiumOfMan": "Adeptus Astra Telepathica",
    "0-7 AdeptusTerra ImperiumOfMan": "Adeptus Astronomica",
    "0-8 AdeptusTerra ImperiumOfMan": "Adeptus Custodes",
    "0-9 AdeptusTerra ImperiumOfMan": "Adeptus Mechanicus",
    "1-0 AdeptusTerra ImperiumOfMan": "Adeptus Ministorum",
    "1-1 AdeptusTerra ImperiumOfMan": "Imperial Fleet",
    "1-2 AdeptusTerra ImperiumOfMan": "Imperial Navy",
    "1-3 AdeptusTerra ImperiumOfMan": "Navis Nobilite",
    "1-4 AdeptusTerra ImperiumOfMan": "Rogue Traders",
    "1-5 AdeptusTerra ImperiumOfMan": "Rogue Traders",
    "1-6 AdeptusTerra ImperiumOfMan": "Thunder Warriors",
    "0-0 AdeptusAstartes AdeptusTerra ImperiumOfMan": "Adeptus Astartes",
    "0-1 AdeptusAstartes AdeptusTerra ImperiumOfMan": "Dreadnought",
    "0-0 DarkAngels AdeptusAstartes ImperiumOfMan": "Dark Angels",
    "0-1 DarkAngels AdeptusAstartes ImperiumOfMan": "Dark Angels",
    "0-2 DarkAngels AdeptusAstartes ImperiumOfMan": "Deathwing",
    "0-3 DarkAngels AdeptusAstartes ImperiumOfMan": "Deathwing",
    "0-4 DarkAngels AdeptusAstartes ImperiumOfMan": "Ravenwing",
    "0-5 DarkAngels AdeptusAstartes ImperiumOfMan": "Ravenwing",
    "0-6 DarkAngels AdeptusAstartes ImperiumOfMan": "Angels of Absolution",
    "0-7 DarkAngels AdeptusAstartes ImperiumOfMan": "Angels of Redemption",
    "0-8 DarkAngels AdeptusAstartes ImperiumOfMan": "Angels of Vengeance",
    "0-9 DarkAngels AdeptusAstartes ImperiumOfMan": "Angels of Vigilance",
    "1-0 DarkAngels AdeptusAstartes ImperiumOfMan": "Consecrators",
    "1-1 DarkAngels AdeptusAstartes ImperiumOfMan": "Disciples of Caliban",
    "1-2 DarkAngels AdeptusAstartes ImperiumOfMan": "Guardians of the Covenant",
    "1-3 DarkAngels AdeptusAstartes ImperiumOfMan": "Unforgiven",
    "0-0 WhiteScars AdeptusAstartes ImperiumOfMan": "White Scars",
    "0-1 WhiteScars AdeptusAstartes ImperiumOfMan": "White Scars",
    "0-2 WhiteScars AdeptusAstartes ImperiumOfMan": "White Scars",
    "0-3 WhiteScars AdeptusAstartes ImperiumOfMan": "Dark Hunters",
    "0-4 WhiteScars AdeptusAstartes ImperiumOfMan": "Destroyers",
    "0-5 WhiteScars AdeptusAstartes ImperiumOfMan": "Iron Talons",
    "0-6 WhiteScars AdeptusAstartes ImperiumOfMan": "Mantis Warriors",
    "0-7 WhiteScars AdeptusAstartes ImperiumOfMan": "Marauders",
    "0-8 WhiteScars AdeptusAstartes ImperiumOfMan": "Solar Hawks",
    "0-9 WhiteScars AdeptusAstartes ImperiumOfMan": "Sons of Jhagatai",
    "1-0 WhiteScars AdeptusAstartes ImperiumOfMan": "Storm Lords",
    "0-0 SpaceWolves AdeptusAstartes ImperiumOfMan": "Space Wolves",
    "0-1 SpaceWolves AdeptusAstartes ImperiumOfMan": "Bjorn Stormwolf",
    "0-2 SpaceWolves AdeptusAstartes ImperiumOfMan": "Bran Redmaw",
    "0-3 SpaceWolves AdeptusAstartes ImperiumOfMan": "Bulveye",
    "0-4 SpaceWolves AdeptusAstartes ImperiumOfMan": "Egil Ironwolf",
    "0-5 SpaceWolves AdeptusAstartes ImperiumOfMan": "Engir Krakendoom",
    "0-6 SpaceWolves AdeptusAstartes ImperiumOfMan": "Erik Morkai",
    "0-7 SpaceWolves AdeptusAstartes ImperiumOfMan": "Gunnar Redmoon",
    "0-8 SpaceWolves AdeptusAstartes ImperiumOfMan": "Harald Deathwolf",
    "0-9 SpaceWolves AdeptusAstartes ImperiumOfMan": "Kjarl Grimblood",
    "1-0 SpaceWolves AdeptusAstartes ImperiumOfMan": "Krom Dragongaze",
    "1-1 SpaceWolves AdeptusAstartes ImperiumOfMan": "Logan Grimnar",
    "1-2 SpaceWolves AdeptusAstartes ImperiumOfMan": "Ragnar Blackmane",
    "1-3 SpaceWolves AdeptusAstartes ImperiumOfMan": "Sven Bloodhowl",
    "0-0 ImperialFists AdeptusAstartes ImperiumOfMan": "Imperial Fists",
    "0-1 ImperialFists AdeptusAstartes ImperiumOfMan": "Imperial Fists",
    "0-2 ImperialFists AdeptusAstartes ImperiumOfMan": "Astral Knights",
    "0-3 ImperialFists AdeptusAstartes ImperiumOfMan": "Black Templars",
    "0-4 ImperialFists AdeptusAstartes ImperiumOfMan": "Black Templars",
    "0-5 ImperialFists AdeptusAstartes ImperiumOfMan": "Celestial Lions",
    "0-6 ImperialFists AdeptusAstartes ImperiumOfMan": "Crimson Fists",
    "0-7 ImperialFists AdeptusAstartes ImperiumOfMan": "Death Strike",
    "0-8 ImperialFists AdeptusAstartes ImperiumOfMan": "Emperor's Warbringers",
    "0-9 ImperialFists AdeptusAstartes ImperiumOfMan": "Excoriators",
    "1-0 ImperialFists AdeptusAstartes ImperiumOfMan": "Executioners",
    "1-1 ImperialFists AdeptusAstartes ImperiumOfMan": "Fire Lords",
    "1-2 ImperialFists AdeptusAstartes ImperiumOfMan": "Hammers of Dorn",
    "1-3 ImperialFists AdeptusAstartes ImperiumOfMan": "Honoured Sons",
    "1-4 ImperialFists AdeptusAstartes ImperiumOfMan": "Invaders",
    "1-5 ImperialFists AdeptusAstartes ImperiumOfMan": "Iron Fists",
    "1-6 ImperialFists AdeptusAstartes ImperiumOfMan": "Iron Knights",
    "1-7 ImperialFists AdeptusAstartes ImperiumOfMan": "Knights of Dorn",
    "1-8 ImperialFists AdeptusAstartes ImperiumOfMan": "Shadow Wolves",
    "1-9 ImperialFists AdeptusAstartes ImperiumOfMan": "Sons of Dorn",
    "2-0 ImperialFists AdeptusAstartes ImperiumOfMan": "Subjugators",
    "0-0 BloodAngels AdeptusAstartes ImperiumOfMan": "Blood Angels",
    "0-1 BloodAngels AdeptusAstartes ImperiumOfMan": "Blood Angels",
    "0-2 BloodAngels AdeptusAstartes ImperiumOfMan": "Blood Angels",
    "0-3 BloodAngels AdeptusAstartes ImperiumOfMan": "Death Company",
    "0-4 BloodAngels AdeptusAstartes ImperiumOfMan": "Angels Encarmine",
    "0-5 BloodAngels AdeptusAstartes ImperiumOfMan": "Angels Penitent",
    "0-6 BloodAngels AdeptusAstartes ImperiumOfMan": "Angels Sanguine",
    "0-7 BloodAngels AdeptusAstartes ImperiumOfMan": "Angels Virmillion",
    "0-8 BloodAngels AdeptusAstartes ImperiumOfMan": "Blood Drinkers",
    "0-9 BloodAngels AdeptusAstartes ImperiumOfMan": "Blood Swords",
    "1-0 BloodAngels AdeptusAstartes ImperiumOfMan": "Carmine Blades",
    "1-1 BloodAngels AdeptusAstartes ImperiumOfMan": "Charnel Guard",
    "1-2 BloodAngels AdeptusAstartes ImperiumOfMan": "Flesh Eaters",
    "1-3 BloodAngels AdeptusAstartes ImperiumOfMan": "Flesh Tearers",
    "1-4 BloodAngels AdeptusAstartes ImperiumOfMan": "Lamenters",
    "1-5 BloodAngels AdeptusAstartes ImperiumOfMan": "Sons of Sanguinius",
    "0-0 IronHands AdeptusAstartes ImperiumOfMan": "Iron Hands",
    "0-1 IronHands AdeptusAstartes ImperiumOfMan": "Iron Hands",
    "0-2 IronHands AdeptusAstartes ImperiumOfMan": "Brazen Claws",
    "0-3 IronHands AdeptusAstartes ImperiumOfMan": "Emperor's Shadows",
    "0-4 IronHands AdeptusAstartes ImperiumOfMan": "Iron Lords",
    "0-5 IronHands AdeptusAstartes ImperiumOfMan": "Red Talons",
    "0-6 IronHands AdeptusAstartes ImperiumOfMan": "Sons of Medusa",
    "0-7 IronHands AdeptusAstartes ImperiumOfMan": "Steel Confessors",
    "0-0 Ultramarines AdeptusAstartes ImperiumOfMan": "Ultramarines",
    "0-1 Ultramarines AdeptusAstartes ImperiumOfMan": "Ultramarines",
    "0-2 Ultramarines AdeptusAstartes ImperiumOfMan": "Ultramarines",
    "0-3 Ultramarines AdeptusAstartes ImperiumOfMan": "Angels Revenant",
    "0-4 Ultramarines AdeptusAstartes ImperiumOfMan": "Aurora Chapter",
    "0-5 Ultramarines AdeptusAstartes ImperiumOfMan": "Black Consuls",
    "0-6 Ultramarines AdeptusAstartes ImperiumOfMan": "Brotherhood of a Thousand",
    "0-7 Ultramarines AdeptusAstartes ImperiumOfMan": "Doom Eagles",
    "0-8 Ultramarines AdeptusAstartes ImperiumOfMan": "Doom Legion",
    "0-9 Ultramarines AdeptusAstartes ImperiumOfMan": "Eagle Warriors",
    "1-0 Ultramarines AdeptusAstartes ImperiumOfMan": "Fire Angels",
    "1-1 Ultramarines AdeptusAstartes ImperiumOfMan": "Fire Hawks",
    "1-2 Ultramarines AdeptusAstartes ImperiumOfMan": "Genesis Chapter",
    "1-3 Ultramarines AdeptusAstartes ImperiumOfMan": "Hawk Lords",
    "1-4 Ultramarines AdeptusAstartes ImperiumOfMan": "Heralds of Ultramar",
    "1-5 Ultramarines AdeptusAstartes ImperiumOfMan": "Howling Griffons",
    "1-6 Ultramarines AdeptusAstartes ImperiumOfMan": "Imperius Reavers",
    "1-7 Ultramarines AdeptusAstartes ImperiumOfMan": "Inceptors",
    "1-8 Ultramarines AdeptusAstartes ImperiumOfMan": "Iron Snakes",
    "1-9 Ultramarines AdeptusAstartes ImperiumOfMan": "Libators",
    "2-0 Ultramarines AdeptusAstartes ImperiumOfMan": "Marines Errant",
    "2-1 Ultramarines AdeptusAstartes ImperiumOfMan": "Marines Errant",
    "2-2 Ultramarines AdeptusAstartes ImperiumOfMan": "Metamarines",
    "2-3 Ultramarines AdeptusAstartes ImperiumOfMan": "Mortifactors",
    "2-4 Ultramarines AdeptusAstartes ImperiumOfMan": "Novamarines",
    "2-5 Ultramarines AdeptusAstartes ImperiumOfMan": "Patriarchs of Ulixis",
    "2-6 Ultramarines AdeptusAstartes ImperiumOfMan": "Praetors of Orpheus",
    "2-7 Ultramarines AdeptusAstartes ImperiumOfMan": "Scythes of the Emperor",
    "2-8 Ultramarines AdeptusAstartes ImperiumOfMan": "Silver Eagles",
    "2-9 Ultramarines AdeptusAstartes ImperiumOfMan": "Silver Skulls",
    "3-0 Ultramarines AdeptusAstartes ImperiumOfMan": "Sons of Guilliman",
    "3-1 Ultramarines AdeptusAstartes ImperiumOfMan": "Sons of Orar",
    "3-2 Ultramarines AdeptusAstartes ImperiumOfMan": "White Consuls",
    "0-0 Salamanders AdeptusAstartes ImperiumOfMan": "Salamanders",
    "0-1 Salamanders AdeptusAstartes ImperiumOfMan": "Salamanders",
    "0-2 Salamanders AdeptusAstartes ImperiumOfMan": "Black Dragons",
    "0-3 Salamanders AdeptusAstartes ImperiumOfMan": "Storm Giants",
    "0-0 RavenGuard AdeptusAstartes ImperiumOfMan": "Raven Guard",
    "0-1 RavenGuard AdeptusAstartes ImperiumOfMan": "Raven Guard",
    "0-2 RavenGuard AdeptusAstartes ImperiumOfMan": "Black Guard",
    "0-3 RavenGuard AdeptusAstartes ImperiumOfMan": "Carcharodons",
    "0-4 RavenGuard AdeptusAstartes ImperiumOfMan": "Dark Eagles",
    "0-5 RavenGuard AdeptusAstartes ImperiumOfMan": "Death Eagles",
    "0-6 RavenGuard AdeptusAstartes ImperiumOfMan": "Death Spectres",
    "0-7 RavenGuard AdeptusAstartes ImperiumOfMan": "Flame Eagles",
    "0-8 RavenGuard AdeptusAstartes ImperiumOfMan": "Imperial Talons",
    "0-9 RavenGuard AdeptusAstartes ImperiumOfMan": "Knights of the Raven",
    "1-0 RavenGuard AdeptusAstartes ImperiumOfMan": "Mentors",
    "1-1 RavenGuard AdeptusAstartes ImperiumOfMan": "Raptors",
    "1-2 RavenGuard AdeptusAstartes ImperiumOfMan": "Revilers",
    "1-3 RavenGuard AdeptusAstartes ImperiumOfMan": "Storm Hawks",
    "1-4 RavenGuard AdeptusAstartes ImperiumOfMan": "Storm Wings",
    "0-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Absolvers",
    "0-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Accipeters",
    "0-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Adulators",
    "0-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angel Guard",
    "0-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels Eradicant",
    "0-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Damnation",
    "0-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Fire",
    "0-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Fury",
    "0-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Iron",
    "0-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Penance",
    "1-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Repentance",
    "1-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels of Retribution",
    "1-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels Porphyr",
    "1-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angels Redeemed",
    "1-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Angry Marines",
    "1-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Astral Hawks",
    "1-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Auric Patricians",
    "1-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Avengers",
    "1-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Avenging Sons",
    "1-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Black Talons",
    "2-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Black Wings",
    "2-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Blazoned Legion",
    "2-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Blood Knights",
    "2-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Blood Ravens",
    "2-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Brazen Minotaurs",
    "2-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Brazen Skulls",
    "2-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Celebrants",
    "2-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Celestial Guard",
    "2-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Champions of Thanatos",
    "2-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Contenders",
    "3-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Crimson Guard",
    "3-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Crimson Paladins",
    "3-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Crimson Scions",
    "3-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Crimson Shades",
    "3-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Crimson Talons",
    "3-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Dark Brotherhood",
    "3-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Dark Crusaders",
    "3-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Dark Hands",
    "3-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Dark Sons",
    "3-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Death Knights",
    "4-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Doom Warriors",
    "4-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Dragon Lords",
    "4-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Hands",
    "4-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Hawks",
    "4-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Scythes",
    "4-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Shield",
    "4-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Spears",
    "4-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Storm",
    "4-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Swords",
    "4-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Emperor's Wolves",
    "5-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Exemplars",
    "5-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Golden Gryphons",
    "5-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Golden Halos",
    "5-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Gorgons",
    "5-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Griffon Lords",
    "5-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Guardians of Celere",
    "5-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Halo Dragons",
    "5-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Harbingers",
    "5-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Haeralds of Vengeance",
    "5-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Hospitalers",
    "6-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Imperial Castellans",
    "6-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Imperial Harbingers",
    "6-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Imperial Hawks",
    "6-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Imperial Paladins",
    "6-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Imperial Stars",
    "6-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Iron Champions",
    "6-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Iron Crusaders",
    "6-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Iron Hawks",
    "6-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Knights of Eternity",
    "6-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Knights of Gryphonne",
    "7-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Legion of the Damned",
    "7-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Liberators",
    "7-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Lion Warriors",
    "7-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Marines August",
    "7-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Marines Exemplar",
    "7-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Marines Malevolent",
    "7-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Masters of Protelus",
    "7-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Minotaurs",
    "7-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Night Watch",
    "7-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Nova Wings",
    "8-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Omega Marines",
    "8-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Penitents",
    "8-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Pretty Marines",
    "8-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Rainbow Warriors",
    "8-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Ravens Watch",
    "8-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Red Hunters",
    "8-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Red Legion",
    "8-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Red Scorpions",
    "8-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Red Templars",
    "8-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Red Wolves",
    "9-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Sable Swords",
    "9-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Silver Guard",
    "9-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Sky Sentinels",
    "9-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Space Sharks",
    "9-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Star Dragons",
    "9-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Star Phantoms",
    "9-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Storm Callers",
    "9-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Storm Falcons",
    "9-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Storm Wardens",
    "9-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Storm Wardens",
    "10-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Storm Warriors",
    "10-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Taurans",
    "10-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Tempest Guard",
    "10-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Tigers Argent",
    "10-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Valedictors",
    "10-5 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Venetors of Osirion",
    "10-6 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Victors",
    "10-7 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Vorpal Swords",
    "10-8 UnknownFoundings AdeptusAstartes ImperiumOfMan": "War Bearers",
    "10-9 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Warmongers",
    "11-0 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Warrior Adepts",
    "11-1 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Warriors Tempest",
    "11-2 UnknownFoundings AdeptusAstartes ImperiumOfMan": "White Minotaurs",
    "11-3 UnknownFoundings AdeptusAstartes ImperiumOfMan": "White Templars",
    "11-4 UnknownFoundings AdeptusAstartes ImperiumOfMan": "Yellow Jackets",
    "0-0 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Astral Claws",
    "0-1 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Crimson Castellans",
    "0-2 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Knights of Blood",
    "0-3 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Relictors",
    "0-4 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Soul Drinkers",
    "0-5 RenegadeChapters AdeptusAstartes ImperiumOfMan": "Tiger Claws",
    "0-0 AstraMilitarum ImperiumOfMan AdeptusTerra": "Astra Militarum",
    "0-1 AstraMilitarum ImperiumOfMan": "1st Kronus Regiment",
    "0-2 AstraMilitarum ImperiumOfMan": "5th Arcadian Regiment",
    "0-3 AstraMilitarum ImperiumOfMan": "7th Mordian Regiment",
    "0-4 AstraMilitarum ImperiumOfMan": "8th Cadian Regiment",
    "0-5 AstraMilitarum ImperiumOfMan": "13th/5th Imperial Army",
    "0-6 AstraMilitarum ImperiumOfMan": "99th Elysian Drop Troops",
    "0-7 AstraMilitarum ImperiumOfMan": "Death Korps of Krieg",
    "0-8 AstraMilitarum ImperiumOfMan": "Maccabian Janissaries",
    "0-9 AstraMilitarum ImperiumOfMan": "Phantine Air Corps",
    "1-0 AstraMilitarum ImperiumOfMan": "Praetorian Guard",
    "1-1 AstraMilitarum ImperiumOfMan": "Tahnelion Airbourne",
    "1-2 AstraMilitarum ImperiumOfMan": "Tanith 1st (First and Only)",
    "1-3 AstraMilitarum ImperiumOfMan": "Tanith 1st (First and Only)",
    "0-0 UnknownRegiments AstraMilitarum ImperiumOfMan": "1st Regiment (Big Red One)",
    "0-1 UnknownRegiments AstraMilitarum ImperiumOfMan": "1st Regiment (Big Red One)",
    "0-2 UnknownRegiments AstraMilitarum ImperiumOfMan": "3rd Regiment (Wrecking Crew)",
    "0-3 UnknownRegiments AstraMilitarum ImperiumOfMan": "9th Regiment (Fighting Ninth)",
    "0-0 TempestusScions AstraMilitarum ImperiumOfMan": "22nd Thetoid Gryphonnes",
    "0-1 TempestusScions AstraMilitarum ImperiumOfMan": "32nd Thetoid Eagles",
    "0-2 TempestusScions AstraMilitarum ImperiumOfMan": "33rd Deltic Phoenixes",
    "0-3 TempestusScions AstraMilitarum ImperiumOfMan": "34th Betic Centaurs",
    "0-4 TempestusScions AstraMilitarum ImperiumOfMan": "34th Psian Vipers",
    "0-5 TempestusScions AstraMilitarum ImperiumOfMan": "43rd Iotan Dragons",
    "0-6 TempestusScions AstraMilitarum ImperiumOfMan": "54th Psian Jackals",
    "0-7 TempestusScions AstraMilitarum ImperiumOfMan": "55th Alphic Hyrdas",
    "0-8 TempestusScions AstraMilitarum ImperiumOfMan": "55th Kappic Eagles",
    "0-9 TempestusScions AstraMilitarum ImperiumOfMan": "62nd Rhoin Cobras",
    "1-0 TempestusScions AstraMilitarum ImperiumOfMan": "68th Deltic Lions",
    "1-1 TempestusScions AstraMilitarum ImperiumOfMan": "73rd Epsilic Eagles",
    "1-2 TempestusScions AstraMilitarum ImperiumOfMan": "86th Deltic Dragons",
    "1-3 TempestusScions AstraMilitarum ImperiumOfMan": "88th Alphic Lions",
    "1-4 TempestusScions AstraMilitarum ImperiumOfMan": "101st Betic Dragons",
    "1-5 TempestusScions AstraMilitarum ImperiumOfMan": "133rd Lambdan Lions",
    "0-0 AdeptaSororitas ImperiumOfMan AdeptusTerra": "Adepta Sororitas",
    "0-1 AdeptaSororitas ImperiumOfMan AdeptusTerra": "Adepta Sororitas",
    "0-2 AdeptaSororitas ImperiumOfMan": "Order Of Our Martyred Lady",
    "0-3 AdeptaSororitas ImperiumOfMan": "Order of the Argent Shroud",
    "0-4 AdeptaSororitas ImperiumOfMan": "Order of the Bloody Rose",
    "0-5 AdeptaSororitas ImperiumOfMan": "Order of the Ebon Chalice",
    "0-6 AdeptaSororitas ImperiumOfMan": "Order of the Sacred Rose",
    "0-7 AdeptaSororitas ImperiumOfMan": "Order of the Valorous Heart",
    "0-0 CollegiaTitanica ImperiumOfMan AdeptusTerra": "Collegia Titanica",
    "0-1 CollegiaTitanica ImperiumOfMan": "Imperial Fists (Titan Legion)",
    "0-2 CollegiaTitanica ImperiumOfMan": "Imperial Hunters",
    "0-3 CollegiaTitanica ImperiumOfMan": "Legio Astorum (Warp Runners)",
    "0-4 CollegiaTitanica ImperiumOfMan": "Legio Astraman (Morning Star)",
    "0-5 CollegiaTitanica ImperiumOfMan": "Legio Atarus (Firebrands)",
    "0-6 CollegiaTitanica ImperiumOfMan": "Legio Crucius (Warmongers)",
    "0-7 CollegiaTitanica ImperiumOfMan": "Legio Gryphonicus (War Griffons)",
    "0-8 CollegiaTitanica ImperiumOfMan": "Legio Honorum (Death Bolts)",
    "0-9 CollegiaTitanica ImperiumOfMan": "Legio Ignatum (Fire Wasps)",
    "1-0 CollegiaTitanica ImperiumOfMan": "Lego Metalica (Iron Skulls)",
    "1-1 CollegiaTitanica ImperiumOfMan": "Legio Tempestus",
    "1-2 CollegiaTitanica ImperiumOfMan": "Nova Guard",
    "1-3 CollegiaTitanica ImperiumOfMan": "Freeblade",
    "0-0 Inquisition ImperiumOfMan AdeptusTerra": "Inquisition",
    "0-1 Inquisition ImperiumOfMan": "Inquisition",
    "0-2 Inquisition ImperiumOfMan": "Inquisition",
    "0-3 Inquisition ImperiumOfMan": "Inquisition",
    "0-4 Inquisition ImperiumOfMan": "Inquisition",
    "0-5 Inquisition ImperiumOfMan": "Ordo Hereticus",
    "0-6 Inquisition ImperiumOfMan": "Ordo Malleus",
    "0-7 Inquisition ImperiumOfMan": "Ordo Xenos",
    "0-8 Inquisition ImperiumOfMan": "Grey Knights",
    "0-9 Inquisition ImperiumOfMan": "Grey Knights",
    "1-0 Inquisition ImperiumOfMan": "Grey Knights",
    "1-1 Inquisition ImperiumOfMan": "Grey Knights",
    "0-0 OfficioAssassinorum ImperiumOfMan AdeptusTerra": "Officio Assassinorum",
    "0-1 OfficioAssassinorum ImperiumOfMan AdeptusTerra": "Officio Assassinorum",
    "0-2 OfficioAssassinorum ImperiumOfMan AdeptusTerra": "Officio Assassinorum",
    "0-3 OfficioAssassinorum ImperiumOfMan": "Callidus Temple",
    "0-4 OfficioAssassinorum ImperiumOfMan": "Cullexus Temple",
    "0-5 OfficioAssassinorum ImperiumOfMan": "Eversor Temple",
    "0-6 OfficioAssassinorum ImperiumOfMan": "Vindicare Temple",
    "0-0 ChaosGods Chaos": "Chaos Undivided",
    "0-1 ChaosGods Chaos": "Khorne",
    "0-2 ChaosGods Chaos": "Khorne",
    "0-3 ChaosGods Chaos": "Khorne",
    "0-4 ChaosGods Chaos": "Nurgle",
    "0-5 ChaosGods Chaos": "Nurgle",
    "0-6 ChaosGods Chaos": "Nurgle",
    "0-7 ChaosGods Chaos": "Slaanesh",
    "0-8 ChaosGods Chaos": "Slaanesh",
    "0-9 ChaosGods Chaos": "Slaanesh",
    "1-0 ChaosGods Chaos": "Tzeentch",
    "1-1 ChaosGods Chaos": "Tzeentch",
    "1-2 ChaosGods Chaos": "Tzeentch",
    "1-3 ChaosGods Chaos": "Malal",
    "0-0 ChaosLegions Chaos": "Emperor's Children",
    "0-1 ChaosLegions Chaos": "Emperor's Children",
    "0-2 ChaosLegions Chaos": "Emperor's Children",
    "0-3 ChaosLegions Chaos": "Iron Warriors",
    "0-4 ChaosLegions Chaos": "Iron Warriors",
    "0-5 ChaosLegions Chaos": "Iron Warriors",
    "0-6 ChaosLegions Chaos": "Night Lords",
    "0-7 ChaosLegions Chaos": "Night Lords",
    "0-8 ChaosLegions Chaos": "Night Lords",
    "0-9 ChaosLegions Chaos": "World Eaters",
    "1-0 ChaosLegions Chaos": "World Eaters",
    "1-1 ChaosLegions Chaos": "World Eaters",
    "1-2 ChaosLegions Chaos": "War Hounds",
    "1-3 ChaosLegions Chaos": "Death Guard",
    "1-4 ChaosLegions Chaos": "Death Guard",
    "1-5 ChaosLegions Chaos": "Death Guard",
    "1-6 ChaosLegions Chaos": "Dusk Raiders",
    "1-7 ChaosLegions Chaos": "Thousand Sons",
    "1-8 ChaosLegions Chaos": "Thousand Sons",
    "1-9 ChaosLegions Chaos": "Thousand Sons",
    "2-0 ChaosLegions Chaos": "Black Legion",
    "2-1 ChaosLegions Chaos": "Black Legion",
    "2-2 ChaosLegions Chaos": "Sons of Horus",
    "2-3 ChaosLegions Chaos": "Luna Wolves",
    "2-4 ChaosLegions Chaos": "Luna Wolves",
    "2-5 ChaosLegions Chaos": "Luna Wolves",
    "2-6 ChaosLegions Chaos": "Word Bearers",
    "2-7 ChaosLegions Chaos": "Word Bearers",
    "2-8 ChaosLegions Chaos": "Word Bearers",
    "2-9 ChaosLegions Chaos": "Alpha Legion",
    "3-0 ChaosLegions Chaos": "Alpha Legion",
    "3-1 ChaosLegions Chaos": "Alpha Legion",
    "0-0 ChaosWarbands Chaos": "Adharon's Reavers",
    "0-1 ChaosWarbands Chaos": "Angels of Ecstasy",
    "0-2 ChaosWarbands Chaos": "Angron's Chosen",
    "0-3 ChaosWarbands Chaos": "Apocalypse Company",
    "0-4 ChaosWarbands Chaos": "Apostles of Contagion",
    "0-5 ChaosWarbands Chaos": "Apostles of Minth Ras",
    "0-6 ChaosWarbands Chaos": "Dark Mechanicus",
    "0-0 TraitorTitanLegions Chaos": "House Devine",
    "0-1 TraitorTitanLegions Chaos": "Legio Excrutiatus (Hell Dogs)",
    "0-2 TraitorTitanLegions Chaos": "Legio fureans (Tiger Eyes)",
    "0-3 TraitorTitanLegions Chaos": "Legio Mortis (Death's Head)",
    "0-4 TraitorTitanLegions Chaos": "Legio Survurtoras (Fire Masters)",
    "0-0 Craftworlds Eldar Xenos": "Eldar",
    "0-1 Craftworlds Eldar Xenos": "Eldar",
    "0-2 Craftworlds Eldar Xenos": "Eldar",
    "0-3 Craftworlds Eldar Xenos": "Alaitoc",
    "0-4 Craftworlds Eldar Xenos": "Altansar",
    "0-5 Craftworlds Eldar Xenos": "Biel-Tan",
    "0-6 Craftworlds Eldar Xenos": "Il-Kaithe",
    "0-7 Craftworlds Eldar Xenos": "Iyanden",
    "0-8 Craftworlds Eldar Xenos": "Iybraesil",
    "0-9 Craftworlds Eldar Xenos": "Kaelor",
    "1-0 Craftworlds Eldar Xenos": "Lugganath",
    "1-1 Craftworlds Eldar Xenos": "Mymeara",
    "1-2 Craftworlds Eldar Xenos": "Saim-Hann",
    "1-3 Craftworlds Eldar Xenos": "Ulthwe",
    "1-4 Craftworlds Eldar Xenos": "Yme-Loc",
    "0-0 Runes Eldar Xenos": "Death Jester",
    "0-1 Runes Eldar Xenos": "Shadowseer",
    "0-2 Runes Eldar Xenos": "Skyweaver",
    "0-3 Runes Eldar Xenos": "Solitaire",
    "0-4 Runes Eldar Xenos": "Unity",
    "0-5 Runes Eldar Xenos": "Voidweaver",
    "0-0 DarkEldar Xenos": "Dark Eldar",
    "0-1 DarkEldar Xenos": "Dark Eldar",
    "0-2 DarkEldar Xenos": "Kabal of the Baleful Gaze",
    "0-3 DarkEldar Xenos": "Kabal of the Black Heart",
    "0-4 DarkEldar Xenos": "Kabal of the Black Myriad",
    "0-5 DarkEldar Xenos": "Kabal of the Bladed Lotus",
    "0-6 DarkEldar Xenos": "Kabal of the Bleaksoul Bretheren",
    "0-7 DarkEldar Xenos": "Kabal of the Broken Sigil",
    "0-8 DarkEldar Xenos": "Kabal of the Dying Sun",
    "0-9 DarkEldar Xenos": "Kabal of the Flayed Skull",
    "1-0 DarkEldar Xenos": "Kabal of the Las Hatred",
    "1-1 DarkEldar Xenos": "Kabal of the Lords of Iron Thorn",
    "1-2 DarkEldar Xenos": "Kabal of the Obsidian Rose",
    "1-3 DarkEldar Xenos": "Kabal of the Poisoned Tongue",
    "1-4 DarkEldar Xenos": "Kabal of the Severed Hand",
    "1-5 DarkEldar Xenos": "Kabal of the Shadowed Thorn",
    "1-6 DarkEldar Xenos": "Kabal of theSplintered Talon",
    "1-7 DarkEldar Xenos": "Kabal of the Wraithkind",
    "0-0 Harlequins Xenos": "Harlequins",
    "0-1 Harlequins Xenos": "Masque of the Dance Without End",
    "0-2 Harlequins Xenos": "Masque of the Dreaming Shadow",
    "0-3 Harlequins Xenos": "Masque of the Frozen Stars",
    "0-4 Harlequins Xenos": "Masque of the Reapers Mirth",
    "0-5 Harlequins Xenos": "Masque of the Shattered Mirage",
    "0-6 Harlequins Xenos": "Masque of the Silent Shroud",
    "0-7 Harlequins Xenos": "Masque of the Soaring Spirit",
    "0-8 Harlequins Xenos": "Masque of the Twisted Path",
    "0-9 Harlequins Xenos": "Masque of the Veiled Path",
    "1-0 Harlequins Xenos": "Masque of the Winter Sun",
    "0-0 Necrons Xenos": "Necrons",
    "0-1 Necrons Xenos": "Necrons",
    "0-2 Necrons Xenos": "Atun",
    "0-3 Necrons Xenos": "Charnovokh",
    "0-4 Necrons Xenos": "Nekthyst",
    "0-5 Necrons Xenos": "Nihilakh",
    "0-6 Necrons Xenos": "Ogodobekh",
    "0-7 Necrons Xenos": "Oroskh",
    "0-8 Necrons Xenos": "Oruscar",
    "0-9 Necrons Xenos": "Sautekh",
    "1-0 Necrons Xenos": "Agdagath",
    "1-1 Necrons Xenos": "Atun",
    "1-2 Necrons Xenos": "Charnovokh",
    "1-3 Necrons Xenos": "Maynarkh",
    "1-4 Necrons Xenos": "Mephrit",
    "1-5 Necrons Xenos": "Necrons",
    "1-6 Necrons Xenos": "Nepheru",
    "1-7 Necrons Xenos": "Nephrekh",
    "1-8 Necrons Xenos": "Nihilakh",
    "1-9 Necrons Xenos": "Novokh",
    "2-0 Necrons Xenos": "Ogdobekh",
    "2-1 Necrons Xenos": "Sarnekh",
    "2-2 Necrons Xenos": "Sautekh",
    "2-3 Necrons Xenos": "Sekemtar",
    "2-4 Necrons Xenos": "Solemnace",
    "2-5 Necrons Xenos": "Suhbekhar",
    "2-6 Necrons Xenos": "Temeryn",
    "2-7 Necrons Xenos": "Thokt",
    "2-8 Necrons Xenos": "Triarch Praetorians",
    "2-9 Necrons Xenos": "Vralekth",
    "0-0 Orks Xenos": "Orks",
    "0-1 Orks Xenos": "Orks",
    "0-2 Orks Xenos": "Orks",
    "0-3 Orks Xenos": "Bad Moons",
    "0-4 Orks Xenos": "Bad Moons",
    "0-5 Orks Xenos": "Blood Axes",
    "0-6 Orks Xenos": "Blood Axes",
    "0-7 Orks Xenos": "Death Skulls",
    "0-8 Orks Xenos": "Death Skulls",
    "0-9 Orks Xenos": "Evil Sunz",
    "1-0 Orks Xenos": "Evil Sunz",
    "1-1 Orks Xenos": "Goffs",
    "1-2 Orks Xenos": "Goffs",
    "1-3 Orks Xenos": "Snakebites",
    "1-4 Orks Xenos": "Snakebites",
    "1-5 Orks Xenos": "Freebooterz",
    "1-6 Orks Xenos": "Freebooterz",
    "0-0 Tau Xenos": "Tau Empire",
    "0-1 Tau Xenos": "Au-taal",
    "0-2 Tau Xenos": "Bork'an",
    "0-3 Tau Xenos": "Dal'yth",
    "0-4 Tau Xenos": "D'yanoi",
    "0-5 Tau Xenos": "Elsy'eir",
    "0-6 Tau Xenos": "Fal'shia",
    "0-7 Tau Xenos": "Fi'rios",
    "0-8 Tau Xenos": "K'elshan",
    "0-9 Tau Xenos": "Ksi'm'yen",
    "1-0 Tau Xenos": "M'gulath Bay",
    "1-1 Tau Xenos": "N'dras",
    "1-2 Tau Xenos": "Sa'cea",
    "1-3 Tau Xenos": "Tash'var",
    "1-4 Tau Xenos": "Tau'n",
    "1-5 Tau Xenos": "T'olku",
    "1-6 Tau Xenos": "Vash'ya",
    "1-7 Tau Xenos": "Vior'la",
    "1-8 Tau Xenos": "Farsight Enclaves",
    "1-9 Tau Xenos": "Kroot",
    "0-0 Tyranids Xenos": "Tyranids",
    "0-1 Tyranids Xenos": "Tyranids",
//    "0-0 NonUserFlair": "Emperor of Mankind",
//    "0-1 NonUserFlair": "High Lords of Terra",
//    "0-2 NonUserFlair": "Great Wolf",
//    "0-3 NonUserFlair": "Black Library",
//    "0-4 NonUserFlair": "Remembrancers",
//    "0-5 NonUserFlair": "Crux Terminatus"
};