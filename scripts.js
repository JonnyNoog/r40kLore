flair.currentChoice = 0;
flair.categoryFilter = null;
flair.categoryFilterChange = false;
flair.typingTimeout = null;
flair.singleSubreddit = false;

flair.subreddits = ['40kLore'];

flair.updateCategoryFilter = function(sheetName) {
    if (sheetName === 'All') {
        flair.categoryFilter = null;
    } else {
        flair.categoryFilter = sheetName;
    }

    flair.categoryFilterChange = true;
    flair.updateFilter();
}

flair.updateFilter = function(text) {
    text = text || document.getElementById('flair-filter-text').value;
    text = text.toString().toLowerCase();

    for (var flairId in flair.byId) {
        if (flair.byId.hasOwnProperty(flairId)) {
            var flairName = flair.byId[flairId].flairName.toLowerCase();
            var categories = flair.byId[flairId].categories;

            var el = document.querySelector('.flair-choice[data-id="' + flairId + '"]');
            if (el == null) {
                continue;
            }

            if (
                    // Check flairName.
                    (text.length === 0 || text === flairName || flairName.indexOf(text) !== -1)
                    &&
                    // Check categories.
                    (flair.categoryFilter === null || categories.indexOf(flair.categoryFilter) !== -1)
                ) {
                n.show(el);
            } else {
                n.hide(el);
            }
        }
    }

    var fn_hashUpdate = function() {
        var hash = "#";

        if (text.length != 0) {
            hash += "q=" + encodeURIComponent(text);
        }

        if (flair.categoryFilter != null) {
            if (hash.length != 1) {
                hash += "&";
            }

            hash += "c=" + encodeURIComponent(flair.categoryFilter);
        }

        history.replaceState(undefined, undefined, hash);
    };

    // Category filter change should be an immediate hash change.
    // For the text filter, we should wait for the user to be done typing.
    if (flair.categoryFilterChange) {
        flair.categoryFilterChange = false;
        fn_hashUpdate();
    } else {
        if (flair.typingTimeout) {
            clearTimeout(flair.typingTimeout);
        }

        flair.typingTimeout = setTimeout(fn_hashUpdate, 600);
    }

}

flair.sendChoice = function() {
    if (flair.currentChoice === 0) {
        alert('Choose a flair first!');
        return;
    }

    flair_text = "";
    var flair_text_element = encodeURIComponent(document.getElementById('flair-selection-text'));

    if (flair_text_element !== 'null') {
        flair_text = flair_text_element.value;
    }

    var subreddits = '';

    if (flair_text.length === 0) {
        flair_text = '%0A';
    }

    var o = document.querySelectorAll('.sr-choice ');
    for (var i = 0, len = o.length; i < len; i++) {
        var sr_name = o[i].getAttribute('data-name');
        if (o[i].querySelector('input[type=checkbox]').checked) {
            subreddits += sr_name + ' ';
        }
    }

    window.open('http://www.reddit.com/message/compose/?to=40kLoreModServitor&subject='+
        flair.currentChoice+
        '&message='+flair_text+'%0A'+
        subreddits)
}

flair.selectChoice = function(flairId, key) {
    var el = document.querySelector('.flair-choice[data-id="'+flairId+'"]');

    if (!el) {
        return;
    }

    n.removeClass(document.querySelectorAll('.flair-choice'), 'selected');
    n.addClass(el, 'selected');

    flair.currentChoice = key;

    document.getElementById('flair-selection-flair').setAttribute('class', 'flair '+ flair.byId[flairId].flairClasses);
    document.getElementById('flair-selection-name').innerHTML = flair.byId[flairId].flairName;
}

flair.loadChoices = function() {
    if (flair.subreddits.length === 1) {
        flair.singleSubreddit = true;
    }

    flair.loadById();

    var doInitialUpdateFilter = false;

    if(window.location.hash) {
        var hash = window.location.hash.substring(1);

        if (hash == 'flair') {
            history.replaceState(undefined, undefined, "#");
        }

        var q = n.getParameterByName('q', "?"+hash);
        var c = n.getParameterByName('c', "?"+hash);

        if (q) {
            document.getElementById('flair-filter-text').value = q;
        }
        if (c) {
            var isAvailable = false;
            for (var i = 0; i < document.getElementById("flair-filter-sheet").length; i++){
                if (document.getElementById("flair-filter-sheet").options[i].value == c){
                    isAvailable = true;
                }
            }

            if (isAvailable) {
                document.getElementById('flair-filter-sheet').value = c;
                flair.categoryFilter = c;
            }
        }

        if (q || c) {
            doInitialUpdateFilter = true;
        }
    }

    var enter = document.getElementById('flair-choices');
    for (var flairId in flair.byId) {
        if (flair.byId.hasOwnProperty(flairId)) {
            var data = flair.byId[flairId];

            var flairChoice = document.createElement('span');
            flairChoice.setAttribute('class', 'flair flair-choice' + data.flairClasses);
            flairChoice.setAttribute('data-name', data.flairName);
            flairChoice.setAttribute('title', data.flairName);
            flairChoice.setAttribute('data-id', data.flairId);
            flairChoice.setAttribute('onclick', 'flair.selectChoice("' + data.flairId + '","' + data.key + '")');

            enter.appendChild(flairChoice);
        }
    }

    if (flair.singleSubreddit) {
        var el = document.getElementById('subreddit-selection-wrapper');
        n.hide(el);
    }

    var srEnter = document.getElementById('subreddit-selection');
    for (var i = 0; i < flair.subreddits.length; i++) {
        var sr = flair.subreddits[i];

        var srChoice = document.createElement('label');
        srChoice.setAttribute('class', 'sr-choice');
        srChoice.setAttribute('data-name', sr);
        srChoice.setAttribute('for', 'sr-choice-'+sr);

        var srChoiceInput = document.createElement('input');
        srChoiceInput.setAttribute('id', 'sr-choice-'+sr);
        srChoiceInput.setAttribute('type', 'checkbox');
        srChoiceInput.setAttribute('checked', '');

        var srChoiceSpan = document.createElement('span');
        srChoiceSpan.textContent = sr;

        srChoice.appendChild(srChoiceInput);
        srChoice.appendChild(srChoiceSpan);

        srEnter.appendChild(srChoice);

        if (i != flair.subreddits.length-1) {
            var srSep = document.createElement('span');
            srSep.setAttribute('class', 'sr-sep');
            srSep.textContent = '|';
            srEnter.appendChild(srSep);
        }
    }

    if (doInitialUpdateFilter) {
        flair.updateFilter();
    }
}

document.addEventListener('DOMContentLoaded', flair.loadChoices, false);

/* UTILITIES
--------------------------------------------------------------------------------*/
var n = {};

n.getParameterByName = function(name, url) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

n.addClass = function(o, className) {
    if (!o || !className || !className.length)
        return;

    o = n.isString(o) ? document.querySelectorAll(o) : o;

    function do_stuff(el) {
        if (el.classList) {
            el.classList.add(className);
        } else if (!hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++)
            do_stuff(o[i]);
    } else do_stuff(o);
}

n.removeClass = function(o, className) {
    if (!o || !className || !className.length)
        return;

    o = n.isString(o) ? document.querySelectorAll(o) : o;

    function do_stuff(el) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            var regExp = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
            document.getElementById("MyElement").className = document.getElementById("MyElement").className.replace(regExp);
        }
    }

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++)
            do_stuff(o[i]);
    } else do_stuff(o);
}

n.toggleClass = function(o, className) {
    if (!o || !className || !className.length)
        return;

    o = n.isString(o) ? document.querySelectorAll(o) : o;

    function do_stuff(el) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            if (hasClass(el, className)) {
                removeClass(el, className);
            } else {
                el.className += ' ' + className;
            }
        }
    }

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++)
            do_stuff(o[i]);
    } else do_stuff(o);
}

n.hasClass = function(o, className) {
    if (!o || !className || !className.length)
        return false;

    o = n.isString(o) ? document.querySelectorAll(o) : o;

    function do_stuff(el) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            var regExp = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
            return document.getElementById("MyElement").className.match(regExp);
        }
    }

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++)
            if (!do_stuff(o[i]))
                return false;
    } else return do_stuff(o);

    return true;
}


n.setClass = function(o, className, state) {
    if (!state && n.hasClass(o, className)) {
        n.removeClass(o, className);
    } else if (state && !n.hasClass(o, className)) {
        n.addClass(o, className);
    }
}

n.isNodeList = function(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);

    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}

n.startsWith = function(str, needle) {
    return str.length >= needle.length && str.substring(0, needle.length) === needle;
}

n.endsWith = function(str, needle) {
    return str.length >= needle.length && str.substring(str.length - needle.length) === needle;
}

// General purpose "contains" function
// For: strings, arrays, objects (check if property exists), nodes
n.contains = function(haystack, needle) {
    if (typeof haystack === 'string' || haystack instanceof String) {
        return haystack.indexOf(needle) > -1;
    } else if (haystack instanceof Array) {
        return n.inArray(needle, haystack);
    } else if (typeof haystack == 'object') {
        return haystack.hasOwnProperty(needle);
    } else if (n.isNode(haystack) && n.isNode(needle)) {
        return haystack.contains(needle);
    }
    return false;
}

n.isString = function(obj) {
    return typeof obj === 'string' || obj instanceof String;
}


n.hide = function(o) {
    o = n.isString(o) ? document.querySelectorAll(o) : o;

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++) {
            o[i].style.display = 'none';
        }
    } else {
        o.style.display = 'none';
    }
}
n.show = function(o) {
    o = n.isString(o) ? document.querySelectorAll(o) : o;

    if (n.isNodeList(o)) {
        for (var i = 0, len = o.length; i < len; i++) {
            o[i].style.display = '';
        }
    } else {
        o.style.display = '';
    }
}
