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
"""
js_output = "/* FLAIR MASTER CONFIG | auto-generated at " + \
    datetime.datetime.now().strftime('%Y-%m-%dT%H:%M:%S-0' + \
        str(7 if time.localtime().tm_isdst else 8) + '00 (ISO-8601)') + " */ \n" + \
        "flair.loadById = function() {" + load_by_id + "}\nflair.byId = {}\n"

# SETTINGS
# ------------------------------------------------------------------------------------------

# The width and height of an individual sprite in pixels.
FLAIR_WIDTH   = 90
FLAIR_HEIGHT  = 30

# The number of sprites in a sprite sheet row, and the max height of a sprite sheet.
SPRITE_WIDTH  = 10
SPRITE_HEIGHT = 12

# List of sprite sheets.
SHEETS = [
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
    'AdeptaSororitas',
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
    'Tyranids',
    'NonUserFlair'
]

# Sprite sheet sources.
sheet_source  = [
    'https://a.thumbs.redditmedia.com/gbra2dsfBYhVL2xSoy0hu2Eo8OLrDgA7CR6qmKcM9Y0.png', # AdeptusAstartes
    'https://a.thumbs.redditmedia.com/w_-zSoIl7PXaMhRbRDLBUC0AAbiMT_H5TZ1CQtp7lI4.png', # BloodAngels
    'https://b.thumbs.redditmedia.com/-pWP4nywemAw-S6xMaZR2H5CslBer1SQ22SfwaaU5Cw.png', # DarkAngels
    'https://b.thumbs.redditmedia.com/YVmQ-AETXtiBPlCJXAmpZLsZwS5i35L8ivxdUM5gifg.png', # ImperialFists
    'https://b.thumbs.redditmedia.com/hEHsr5S589kUft2BXRHyZxVjwcvWPsJLMfUhQ6MuWJY.png', # IronHands
    'https://b.thumbs.redditmedia.com/wvzV0ww5fUfinAi-TY2rz04Q_Q0GnNesNhzdlY2p-AM.png', # RavenGuard
    'https://b.thumbs.redditmedia.com/z-5nqY4EcrffkVzJXUK1FB2UQngSGqGiGXvDLufy4AY.png', # RenegadeChapters
    'https://b.thumbs.redditmedia.com/p2RtUhCc0jAxEmdYCyBu-wKojCLWzlwAXdFWKS4ZTlg.png', # Salamanders
    'https://b.thumbs.redditmedia.com/AItZ2fY8R3cvJYepahZvBUUF8q8H2Lr1I_hfO68O8Jw.png', # SpaceWolves
    'https://b.thumbs.redditmedia.com/aaCDsPCaZplYoMefS-W5LX_HwxGeEcKc5EOn-JCDqro.png', # Ultramarines
    'https://a.thumbs.redditmedia.com/ixtJbP-t30Bi0n4f7oHK7xWb8EUxGg0Y5WBHEJZMCf0.png', # UnknownFoundings
    'https://b.thumbs.redditmedia.com/EvfHxS4Dea8OcpSrXedolWAtcEGR_gbQr8gu_j7YvuA.png', # WhiteScars
    'https://b.thumbs.redditmedia.com/3zxEaYA0xtRkwaqT4KjqgTq5SuZotwCWw9azAeUkCpw.png', # AdeptaSororitas
    'https://b.thumbs.redditmedia.com/X2kPtTaK8IWq3xpEFFYyWSnOsQeHwaLS0mtEhmapAGQ.png', # AdeptusTerra
    'https://b.thumbs.redditmedia.com/cKSBw2AkuaqhHGwN4dE-TZ6Hq9t11jfUJlcqIq9IkxU.png', # CollegiaTitanica
    'https://b.thumbs.redditmedia.com/DRbAdhU-HZuL9YC4cGs9bFDleWKitsb-xeLllYDUuEk.png', # Inquisition
    'https://b.thumbs.redditmedia.com/iOIgll75tanbpjGHFSItYiA0UCcR4Pz1hs0qjJ-TYtc.png', # OfficioAssassinorum
    'https://b.thumbs.redditmedia.com/A_lvapk67E9l8xHiSz2wqIhtm_fKGXhfTrK8KHfX36A.png', # AstraMilitarum
    'https://a.thumbs.redditmedia.com/OD-ZLpuMrCKL-onTuG3CkQ-2HKd0bAodpc_yNgzKjq8.png', # TempestusScions
    'https://b.thumbs.redditmedia.com/NklHyYWkZjxCvLRSEdqOl1HY_fPP3R9uYSyz0YN61-w.png', # UnknownRegiments
    'https://b.thumbs.redditmedia.com/iOyIrRXD6uH4kqFDuhHqasoAyLpqSzGo2aUyluK5l_k.png', # ChaosGods
    'https://b.thumbs.redditmedia.com/080Qa2OxvEppttSVZSWXAtd7qThVt6D1h2wAAtqvyZs.png', # ChaosLegions
    'https://a.thumbs.redditmedia.com/_jnJui_xMXxkkzXkBD0ThlzU4Z3u0iNMHFBVEnNHuL0.png', # ChaosWarbands
    'https://b.thumbs.redditmedia.com/nkiLz41xgOxFGv1md03sxd3ZaL1-BPUWZIMb3m6-tqM.png', # TraitorTitanLegions
    'https://b.thumbs.redditmedia.com/uxEt1f9nNLBsQExgJG753OqaLr-h8MaDck7Z2h6ICKE.png', # Craftworlds
    'https://b.thumbs.redditmedia.com/11pLhmSGSYwAJGTEL6-UIvRV_8DwCM_paJuMaDrT6PE.png', # DarkEldar
    'https://b.thumbs.redditmedia.com/MSNhAokyLbp46zaxjbeZYNCCBeYzYeeDDEAO48vkTqk.png', # Harlequins
    'https://a.thumbs.redditmedia.com/-VMndSBYcyloXZ--1d1EiDcddrOcOCKE06ugCTD4tO4.png', # Runes
    'https://b.thumbs.redditmedia.com/8oGz2nhCRn_87p_BZMX1Dcs_x6mKxsa_rDJuuN2s2QM.png', # Necrons
    'https://b.thumbs.redditmedia.com/1jSVyVr-lepqMllWRR_Pt015zfKNcwE18L71sCQIrWc.png', # Orks
    'https://b.thumbs.redditmedia.com/rRYIMknktWyvPJqeskdYEDQAOAMRoU5Skufx9VcEKDk.png', # Tau
    'https://b.thumbs.redditmedia.com/jMKyshU4ctkoPlGfMUtWXg1uVGzC1408MCiuHuXZIZA.png', # Tyranids
    'https://b.thumbs.redditmedia.com/laTz_y6DQpKBXfIteCmEG-HWcYzhziavWvocFJ6Vp7Q.png', # NonUserFlair
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
for sheet in SHEETS:
    output += '.flair-' + sheet + '{background-image:url(%%' + sheet + '%%) !important}'
    output += "\n"

    output_source += '.flair-' + sheet + '{background-image:url(' + \
    sheet_source[i] + ') !important}'
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

for sheet_element in FLAIR_ETC:
    categories = sheet_element[0]
    sheet_data = sheet_element[1]
    last_sheet_element = False

    for line_number, sprite_map in sheet_data.items():
        j = 0
        for item in sprite_map:
            individual_categories = item[0]
            enabled = item[1]
            flair_name = item[2]
            string_ending = '",'
            last_item = False

            if individual_categories:
                individual_categories = ' ' + individual_categories

            if not enabled:
                js_output += '//'

            js_output += '    "' + str(line_number -1) + '-' + str(j) + ' ' + \
            categories + individual_categories + '": "' + flair_name + '",'
            js_output += "\n"

            j += 1

# Strip last comma.
js_output_list = list(js_output)
js_output_list[-2] = ''
js_output = "".join(js_output_list)

js_output += '};'

with open('./flair.js', 'w+') as outfile:
    outfile.seek(0)
    outfile.write(js_output)
    outfile.truncate()
