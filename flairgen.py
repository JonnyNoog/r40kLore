import time
import datetime
from flairnames import *

# PREPARE OUTPUT
# ------------------------------------------------------------------------------------------

output = ''
output_source = ''
load_by_id = """
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            var spritepos = data.shift();
            var flairClasses = ' flair-' + spritepos;
            var categories = '';

            for (var i = 0; i < data.length; i++)
            {
                flairClasses += ' flair-' + data[i];
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
"""
js_output = "/* FLAIR MASTER CONFIG | auto-generated at " + \
    datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%S-0' + \
        str(7 if time.localtime().tm_isdst else 8) + '00 (ISO-8601)') + " */ \n" + \
        "flair.loadById = function() {" + load_by_id + "}\nflair.byId = {}\n"

# SETTINGS
# ------------------------------------------------------------------------------------------

# The width and height of an individual sprite in pixels.
FLAIR_WIDTH   = 80
FLAIR_HEIGHT  = 30

# The number of sprites in a sprite sheet row, and the max height of a sprite sheet.
SPRITE_WIDTH  = 10
SPRITE_HEIGHT = 12

# List of sprite sheets.
sheets = [
    'AdeptusAstartes',
    'BloodAngels',
    'DarkAngels',
    'ImperialFists',
    'IronHands',
    'RavenGuard',
    'RenegadeChapters',
    'Salamanders',
    'SpaceWolves',
    'Ultramarines',
    'UnknownFoundings',
    'WhiteScars',
    'AdeptusSororitas',
    'AdeptusTerra',
    'CollegiaTitanica',
    'Inquisition',
    'OfficioAssassinorum',
    'AstraMilitarum',
    'TempestusScions',
    'UnknownRegiments',
    'ChaosGods',
    'ChaosLegions',
    'ChaosWarbands',
    'TraitorTitanLegions',
    'Craftworlds',
    'DarkEldar',
    'Harlequins',
    'Runes',
    'Necrons',
    'Orks',
    'Tau',
    'Tyranids'
]

# Sprite sheet sources.
sheet_source  = [
    'https://a.thumbs.redditmedia.com/bHByTaUzO7eeko5gWuknVafIPnaiyWB2GTP2iPlt1J4.png', # AdeptusAstartes
    'https://a.thumbs.redditmedia.com/w_-zSoIl7PXaMhRbRDLBUC0AAbiMT_H5TZ1CQtp7lI4.png', # BloodAngels
    'https://b.thumbs.redditmedia.com/-pWP4nywemAw-S6xMaZR2H5CslBer1SQ22SfwaaU5Cw.png', # DarkAngels
    'https://b.thumbs.redditmedia.com/YVmQ-AETXtiBPlCJXAmpZLsZwS5i35L8ivxdUM5gifg.png', # ImperialFists
    'https://b.thumbs.redditmedia.com/hEHsr5S589kUft2BXRHyZxVjwcvWPsJLMfUhQ6MuWJY.png', # IronHands
    'https://b.thumbs.redditmedia.com/wvzV0ww5fUfinAi-TY2rz04Q_Q0GnNesNhzdlY2p-AM.png', # RavenGuard
    'https://b.thumbs.redditmedia.com/NE9TGdNa8hfuHpzrmlL66ymTv1wMASLBgWSfE1KQHDo.png', # RenegadeChapters
    'https://b.thumbs.redditmedia.com/79nwu9xREUhmAL-Lnz7mhishjhsW8Jo6BzkPQgGhOGw.png', # Salamanders
    'https://b.thumbs.redditmedia.com/AItZ2fY8R3cvJYepahZvBUUF8q8H2Lr1I_hfO68O8Jw.png', # SpaceWolves
    'https://b.thumbs.redditmedia.com/aaCDsPCaZplYoMefS-W5LX_HwxGeEcKc5EOn-JCDqro.png', # Ultramarines
    'https://b.thumbs.redditmedia.com/bhAs4BcwPek_ixWxXpIYq20VcYPZlNbU0MJHa9FUIZU.png', # UnknownFoundings
    'https://b.thumbs.redditmedia.com/EvfHxS4Dea8OcpSrXedolWAtcEGR_gbQr8gu_j7YvuA.png', # WhiteScars
    'https://b.thumbs.redditmedia.com/3zxEaYA0xtRkwaqT4KjqgTq5SuZotwCWw9azAeUkCpw.png', # AdeptusSororitas
    'https://a.thumbs.redditmedia.com/Or6-qh7xt-ri1RH2_XrstwIdGKYwH8az8nsS9P-4Xm4.png', # AdeptusTerra
    'https://b.thumbs.redditmedia.com/i5W56e1tB7KZAMVw3HOx-Mnv1i_FEMiPZd4MYZqcEgM.png', # CollegiaTitanica
    'https://b.thumbs.redditmedia.com/DRbAdhU-HZuL9YC4cGs9bFDleWKitsb-xeLllYDUuEk.png', # Inquisition
    'https://b.thumbs.redditmedia.com/eg1v3OZ20UhsNgF4Py_ml6elrW2AMvcIN1dUCTnJnZI.png', # OfficioAssassinorum
    'https://b.thumbs.redditmedia.com/A_lvapk67E9l8xHiSz2wqIhtm_fKGXhfTrK8KHfX36A.png', # AstraMilitarum
    'https://a.thumbs.redditmedia.com/OD-ZLpuMrCKL-onTuG3CkQ-2HKd0bAodpc_yNgzKjq8.png', # TempestusScions
    'https://b.thumbs.redditmedia.com/NklHyYWkZjxCvLRSEdqOl1HY_fPP3R9uYSyz0YN61-w.png', # UnknownRegiments
    'https://b.thumbs.redditmedia.com/iOyIrRXD6uH4kqFDuhHqasoAyLpqSzGo2aUyluK5l_k.png', # ChaosGods
    'https://b.thumbs.redditmedia.com/080Qa2OxvEppttSVZSWXAtd7qThVt6D1h2wAAtqvyZs.png', # ChaosLegions
    'https://b.thumbs.redditmedia.com/PNMKlkJJQ3BcI63ElqeX0qo403-5sUpDwtOowWHbMtY.png', # ChaosWarbands
    'https://b.thumbs.redditmedia.com/nkiLz41xgOxFGv1md03sxd3ZaL1-BPUWZIMb3m6-tqM.png', # TraitorTitanLegions
    'https://b.thumbs.redditmedia.com/4i0I49l26T81Jc33OL1Y1C5Q22rRgzUhZC7Ga70AKxI.png', # CraftWorlds
    'https://b.thumbs.redditmedia.com/11pLhmSGSYwAJGTEL6-UIvRV_8DwCM_paJuMaDrT6PE.png', # DarkEldar
    'https://b.thumbs.redditmedia.com/Sh8kyHzlRoxfGv26fWYrlB5z5jupQ9p1nEDSRYrbMvY.png', # Harlequins
    'https://a.thumbs.redditmedia.com/-VMndSBYcyloXZ--1d1EiDcddrOcOCKE06ugCTD4tO4.png', # Runes
    'https://a.thumbs.redditmedia.com/vEbjTduC63dXIVP7BXH0mtTYcH_5SxMlYAOOU265oS0.png', # Necrons
    'https://b.thumbs.redditmedia.com/1jSVyVr-lepqMllWRR_Pt015zfKNcwE18L71sCQIrWc.png', # Orks
    'https://b.thumbs.redditmedia.com/25kvPiYmKXYMZauyUI8Rn98lDtSsEv73h34VVVW__OY.png', # Tau
    'https://b.thumbs.redditmedia.com/jMKyshU4ctkoPlGfMUtWXg1uVGzC1408MCiuHuXZIZA.png', # Tyranids
    'https://a.thumbs.redditmedia.com/CpxEQNXKqW34duUlVSWBAhxVKYYX-1HWwCjNI9cg164.png', # NonUserFlair
]

# The number of flair images on each sheet.
counts = [
    1, # AdeptusAstartes
    16, # BloodAngels
    14, # DarkAngels
    21, # ImperialFists
    8, # IronHands
    15, # RavenGuard
    6, # RenegadeChapters
    4, # Salamanders
    14, # SpaceWolves
    33, # Ultramarines
    115, # UnknownFoundings
    11, # WhiteScars
    8, # AdeptusSororitas
    26, # AdeptusTerra
    13, # CollegiaTitanica
    12, # Inquisition
    7, # OfficioAssassinorum
    14, # AstraMilitarum
    16, # TempestusScions
    4, # UnknownRegiments
    14, # ChaosGods
    32, # ChaosLegions
    6, # ChaosWarbands
    5, # TraitorTitanLegions
    14, # CraftWorlds
    18, # DarkEldar
    12, # Harlequins
    6, # Runes
    10, # Necrons
    18, # Orks
    19, # Tau
    2, # Tyranids
    4, # NonUserFlair
]

# GENERATE CSS
# ------------------------------------------------------------------------------------------

for i in range(0, SPRITE_HEIGHT):
    for j in range(0, SPRITE_WIDTH):
        if i == 0 and j == 0:
            output += '.flair-0-0{background-position:0 0}'
            continue

        x = '-' + str(j * FLAIR_WIDTH) + 'px'
        y = '-' + str(i * FLAIR_HEIGHT) + 'px'

        if j == 0:
            x = '0'
        if i == 0:
            y = '0'

        output += '.flair-' + str(i) + '-' + str(j) + '{background:' + x + ' ' + y + '}'
    output += "\n"

output_source = output

i = 0
for sheet in sheets:
    output += '.flair-' + sheet + '{background-image:url(%%' + sheet + '%%) !important}'
    output += "\n"

    output_source += '.flair-' + sheet + '{background-image:url(' + sheet_source[i] + ') !important}'
    output_source += "\n"

    i += 1

with open('./flair.css', 'w+') as outfile:
    outfile.seek(0)
    outfile.write(output)
    outfile.truncate()

with open('./jonnynoog.github.io-flair.css', 'w+') as outfile:
    outfile.seek(0)
    outfile.write(output_source)
    outfile.truncate()

# GENERATE JS
# ------------------------------------------------------------------------------------------

js_output += 'flair.names = {' + "\n"
js_output += "/* [STANDARD] */\n"

for sheet_element in flair_etc:
    i = 0
    categories = sheet_element[0]
    sheet_data = sheet_element[1]
    last_sheet_element = False

    if i == len(flair_etc) - 1:
        last_sheet_element = True

    i += 1

    for line_number, sprite_map in sheet_data.items():
        j = 0
        for item in sprite_map:
            individual_categories = item[0]
            enabled = item[1]
            flair_name = item[2]
            string_ending = '",'
            last_item = False

            if j == len(sprite_map) - 1:
                last_item = True

            if last_sheet_element and last_item:
                string_ending = '"'

            if enabled:
                if individual_categories:
                    categories += ' ' + individual_categories

                js_output += '    "' + str(line_number -1) + '-' + str(j) + ' ' + \
                categories + '": "' + flair_name + string_ending
                js_output += "\n"

            j += 1

js_output += '};'

with open('./flair.js', 'w+') as outfile:
    outfile.seek(0)
    outfile.write(js_output)
    outfile.truncate()
