(function() {

    var keyCodeMap = {
        '0': 48,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        'A': 65,
        'AE': 198,
        'Aacute': 193,
        'Acircumflex': 194,
        'AddFavorite': 16777408,
        'Adiaeresis': 196,
        'Agrave': 192,
        'Alt': 16777251,
        'AltGr': 16781571,
        'Ampersand': 38,
        'Any': 32,
        'Apostrophe': 39,
        'ApplicationLeft': 16777415,
        'ApplicationRight': 16777416,
        'Aring': 197,
        'AsciiCircum': 94,
        'AsciiTilde': 126,
        'Asterisk': 42,
        'At': 64,
        'Atilde': 195,
        'AudioCycleTrack': 16777478,
        'AudioForward': 16777474,
        'AudioRandomPlay': 16777476,
        'AudioRepeat': 16777475,
        'AudioRewind': 16777413,
        'Away': 16777464,
        'B': 66,
        'Back': 16777313,
        'BackForward': 16777414,
        'Backslash': 92,
        'Backspace': 16777219,
        'Backtab': 16777218,
        'Bar': 124,
        'BassBoost': 16777331,
        'BassDown': 16777333,
        'BassUp': 16777332,
        'Battery': 16777470,
        'Bluetooth': 16777471,
        'Book': 16777417,
        'BraceLeft': 123,
        'BraceRight': 125,
        'BracketLeft': 91,
        'BracketRight': 93,
        'BrightnessAdjust': 16777410,
        'C': 67,
        'CD': 16777418,
        'Calculator': 16777419,
        'Calendar': 16777444,
        'Call': 17825796,
        'Camera': 17825824,
        'CameraFocus': 17825825,
        'Cancel': 16908289,
        'CapsLock': 16777252,
        'Ccedilla': 199,
        'Clear': 16777227,
        'ClearGrab': 16777421,
        'Close': 16777422,
        'Codeinput': 16781623,
        'Colon': 58,
        'Comma': 44,
        'Community': 16777412,
        'Context1': 17825792,
        'Context2': 17825793,
        'Context3': 17825794,
        'Context4': 17825795,
        'ContrastAdjust': 16777485,
        'Control': 16777249,
        'Copy': 16777423,
        'Cut': 16777424,
        'D': 68,
        'DOS': 16777426,
        'Dead_Abovedot': 16781910,
        'Dead_Abovering': 16781912,
        'Dead_Acute': 16781905,
        'Dead_Belowdot': 16781920,
        'Dead_Breve': 16781909,
        'Dead_Caron': 16781914,
        'Dead_Cedilla': 16781915,
        'Dead_Circumflex': 16781906,
        'Dead_Diaeresis': 16781911,
        'Dead_Doubleacute': 16781913,
        'Dead_Grave': 16781904,
        'Dead_Hook': 16781921,
        'Dead_Horn': 16781922,
        'Dead_Iota': 16781917,
        'Dead_Macron': 16781908,
        'Dead_Ogonek': 16781916,
        'Dead_Semivoiced_Sound': 16781919,
        'Dead_Tilde': 16781907,
        'Dead_Voiced_Sound': 16781918,
        'Delete': 16777223,
        'Direction_L': 16777305,
        'Direction_R': 16777312,
        'Display': 16777425,
        'Documents': 16777427,
        'Dollar': 36,
        'Down': 16777237,
        'E': 69,
        'ETH': 208,
        'Eacute': 201,
        'Ecircumflex': 202,
        'Ediaeresis': 203,
        'Egrave': 200,
        'Eisu_Shift': 16781615,
        'Eisu_toggle': 16781616,
        'Eject': 16777401,
        'End': 16777233,
        'Enter': 16777221,
        'Equal': 61,
        'Escape': 16777216,
        'Excel': 16777428,
        'Exclam': 33,
        'Execute': 16908291,
        'Explorer': 16777429,
        'F': 70,
        'F1': 16777264,
        'F10': 16777273,
        'F11': 16777274,
        'F12': 16777275,
        'F13': 16777276,
        'F14': 16777277,
        'F15': 16777278,
        'F16': 16777279,
        'F17': 16777280,
        'F18': 16777281,
        'F19': 16777282,
        'F2': 16777265,
        'F20': 16777283,
        'F21': 16777284,
        'F22': 16777285,
        'F23': 16777286,
        'F24': 16777287,
        'F25': 16777288,
        'F26': 16777289,
        'F27': 16777290,
        'F28': 16777291,
        'F29': 16777292,
        'F3': 16777266,
        'F30': 16777293,
        'F31': 16777294,
        'F32': 16777295,
        'F33': 16777296,
        'F34': 16777297,
        'F35': 16777298,
        'F4': 16777267,
        'F5': 16777268,
        'F6': 16777269,
        'F7': 16777270,
        'F8': 16777271,
        'F9': 16777272,
        'Favorites': 16777361,
        'Finance': 16777411,
        'Flip': 17825798,
        'Forward': 16777314,
        'G': 71,
        'Game': 16777430,
        'Go': 16777431,
        'Greater': 62,
        'H': 72,
        'Hangul': 16781617,
        'Hangul_Banja': 16781625,
        'Hangul_End': 16781619,
        'Hangul_Hanja': 16781620,
        'Hangul_Jamo': 16781621,
        'Hangul_Jeonja': 16781624,
        'Hangul_PostHanja': 16781627,
        'Hangul_PreHanja': 16781626,
        'Hangul_Romaja': 16781622,
        'Hangul_Special': 16781631,
        'Hangul_Start': 16781618,
        'Hangup': 17825797,
        'Hankaku': 16781609,
        'Help': 16777304,
        'Henkan': 16781603,
        'Hibernate': 16777480,
        'Hiragana': 16781605,
        'Hiragana_Katakana': 16781607,
        'History': 16777407,
        'Home': 16777232,
        'HomePage': 16777360,
        'HotLinks': 16777409,
        'Hyper_L': 16777302,
        'Hyper_R': 16777303,
        'I': 73,
        'Iacute': 205,
        'Icircumflex': 206,
        'Idiaeresis': 207,
        'Igrave': 204,
        'Insert': 16777222,
        'J': 74,
        'K': 75,
        'Kana_Lock': 16781613,
        'Kana_Shift': 16781614,
        'Kanji': 16781601,
        'Katakana': 16781606,
        'KeyboardBrightnessDown': 16777398,
        'KeyboardBrightnessUp': 16777397,
        'KeyboardLightOnOff': 16777396,
        'L': 76,
        'LastNumberRedial': 17825801,
        'Launch0': 16777378,
        'Launch1': 16777379,
        'Launch2': 16777380,
        'Launch3': 16777381,
        'Launch4': 16777382,
        'Launch5': 16777383,
        'Launch6': 16777384,
        'Launch7': 16777385,
        'Launch8': 16777386,
        'Launch9': 16777387,
        'LaunchA': 16777388,
        'LaunchB': 16777389,
        'LaunchC': 16777390,
        'LaunchD': 16777391,
        'LaunchE': 16777392,
        'LaunchF': 16777393,
        'LaunchG': 16777486,
        'LaunchH': 16777487,
        'LaunchMail': 16777376,
        'LaunchMedia': 16777377,
        'Left': 16777234,
        'Less': 60,
        'LightBulb': 16777405,
        'LogOff': 16777433,
        'M': 77,
        'MailForward': 16777467,
        'Market': 16777434,
        'Massyo': 16781612,
        'MediaLast': 16842751,
        'MediaNext': 16777347,
        'MediaPause': 16777349,
        'MediaPlay': 16777344,
        'MediaPrevious': 16777346,
        'MediaRecord': 16777348,
        'MediaStop': 16777345,
        'MediaTogglePlayPause': 16777350,
        'Meeting': 16777435,
        'Memo': 16777404,
        'Menu': 16777301,
        'MenuKB': 16777436,
        'MenuPB': 16777437,
        'Messenger': 16777465,
        'Meta': 16777250,
        'Minus': 45,
        'Mode_switch': 16781694,
        'MonBrightnessDown': 16777395,
        'MonBrightnessUp': 16777394,
        'Muhenkan': 16781602,
        'Multi_key': 16781600,
        'MultipleCandidate': 16781629,
        'Music': 16777469,
        'MySites': 16777438,
        'N': 78,
        'News': 16777439,
        'No': 16842754,
        'Ntilde': 209,
        'NumLock': 16777253,
        'NumberSign': 35,
        'O': 79,
        'Oacute': 211,
        'Ocircumflex': 212,
        'Odiaeresis': 214,
        'OfficeHome': 16777440,
        'Ograve': 210,
        'Ooblique': 216,
        'OpenUrl': 16777364,
        'Option': 16777441,
        'Otilde': 213,
        'P': 80,
        'PageDown': 16777239,
        'PageUp': 16777238,
        'ParenLeft': 40,
        'ParenRight': 41,
        'Paste': 16777442,
        'Pause': 16777224,
        'Percent': 37,
        'Period': 46,
        'Phone': 16777443,
        'Pictures': 16777468,
        'Play': 16908293,
        'Plus': 43,
        'PowerDown': 16777483,
        'PowerOff': 16777399,
        'PreviousCandidate': 16781630,
        'Print': 16777225,
        'Printer': 16908290,
        'Q': 81,
        'Question': 63,
        'QuoteDbl': 34,
        'QuoteLeft': 96,
        'R': 82,
        'Refresh': 16777316,
        'Reload': 16777446,
        'Reply': 16777445,
        'Return': 16777220,
        'Right': 16777236,
        'Romaji': 16781604,
        'RotateWindows': 16777447,
        'RotationKB': 16777449,
        'RotationPB': 16777448,
        'S': 83,
        'Save': 16777450,
        'ScreenSaver': 16777402,
        'ScrollLock': 16777254,
        'Search': 16777362,
        'Select': 16842752,
        'Semicolon': 59,
        'Send': 16777451,
        'Shift': 16777248,
        'Shop': 16777406,
        'SingleCandidate': 16781628,
        'Slash': 47,
        'Sleep': 16908292,
        'Space': 32,
        'Spell': 16777452,
        'SplitScreen': 16777453,
        'Standby': 16777363,
        'Stop': 16777315,
        'Subtitle': 16777477,
        'Super_L': 16777299,
        'Super_R': 16777300,
        'Support': 16777454,
        'Suspend': 16777484,
        'SysReq': 16777226,
        'T': 84,
        'THORN': 222,
        'Tab': 16777217,
        'TaskPane': 16777455,
        'Terminal': 16777456,
        'Time': 16777479,
        'ToDoList': 16777420,
        'ToggleCallHangup': 17825799,
        'Tools': 16777457,
        'TopMenu': 16777482,
        'Touroku': 16781611,
        'Travel': 16777458,
        'TrebleDown': 16777335,
        'TrebleUp': 16777334,
        'U': 85,
        'UWB': 16777473,
        'Uacute': 218,
        'Ucircumflex': 219,
        'Udiaeresis': 220,
        'Ugrave': 217,
        'Underscore': 95,
        'Up': 16777235,
        'V': 86,
        'Video': 16777459,
        'View': 16777481,
        'VoiceDial': 17825800,
        'VolumeDown': 16777328,
        'VolumeMute': 16777329,
        'VolumeUp': 16777330,
        'W': 87,
        'WLAN': 16777472,
        'WWW': 16777403,
        'WakeUp': 16777400,
        'WebCam': 16777466,
        'Word': 16777460,
        'X': 88,
        'Xfer': 16777461,
        'Y': 89,
        'Yacute': 221,
        'Yes': 16842753,
        'Z': 90,
        'Zenkaku': 16781608,
        'Zenkaku_Hankaku': 16781610,
        'Zoom': 16908294,
        'ZoomIn': 16777462,
        'ZoomOut': 16777463,
        'acute': 180,
        'brokenbar': 166,
        'cedilla': 184,
        'cent': 162,
        'copyright': 169,
        'currency': 164,
        'degree': 176,
        'diaeresis': 168,
        'division': 247,
        'exclamdown': 161,
        'guillemotleft': 171,
        'guillemotright': 187,
        'hyphen': 173,
        'iTouch': 16777432,
        'macron': 175,
        'masculine': 186,
        'mu': 181,
        'multiply': 215,
        'nobreakspace': 160,
        'notsign': 172,
        'onehalf': 189,
        'onequarter': 188,
        'onesuperior': 185,
        'ordfeminine': 170,
        'paragraph': 182,
        'periodcentered': 183,
        'plusminus': 177,
        'questiondown': 191,
        'registered': 174,
        'section': 167,
        'ssharp': 223,
        'sterling': 163,
        'threequarters': 190,
        'threesuperior': 179,
        'twosuperior': 178,
        'unknown': 33554431,
        'ydiaeresis': 255,
        'yen': 165
    };

    var root = {
        recordSuite: { title: '', specs: [] },
        helpers: [],
        specs: []
    };

    var socket = io.connect();

    var elements = {
        view: document.getElementById('view'),
        loadHelpers: document.getElementById('loadHelpers'),
        loadSpecs: document.getElementById('loadSpecs'),
        recordSpecs: document.getElementById('recordSpecs'),
        runSpecs: document.getElementById('runSpecs'),
        suiteTitle: document.getElementById('suiteTitle'),
        suiteFilename: document.getElementById('suiteFilename'),
        specTitle: document.getElementById('specTitle'),
        addSpec: document.getElementById('addSpec'),
        actionName: document.getElementById('actionName'),
        actionArgument: document.getElementById('actionArgument'),
        addAction: document.getElementById('addAction'),
        suiteSource: document.getElementById('suiteSource'),
        infoData: document.getElementById('infoData'),
        beforeAll: document.getElementById('beforeAll'),
        afterAll: document.getElementById('afterAll'),
        beforeEach: document.getElementById('beforeEach'),
        afterEach: document.getElementById('afterEach'),
        log: document.getElementById('log'),
        img: document.createElement('img'),
        input: document.createElement('input'),
        beforeAllCall: document.getElementById('beforeAllCall'),
        afterAllCall: document.getElementById('afterAllCall'),
        beforeEachCall: document.getElementById('beforeEachCall'),
        afterEachCall: document.getElementById('afterEachCall'),
        saveSpecs: document.getElementById('saveSpecs')
    };

    var updateSuiteSource = function() {
        elements.suiteSource.innerHTML = JSON.stringify(root.recordSuite, null, 4);
    };

    var updateInfo = function() {
        elements.infoData.innerHTML = JSON.stringify({
            helpers: root.helpers || [],
            suites: root.suites || []
        }, null, 4);
    };

    var updateHelpersSelect = function() {
        elements.actionName.innerHTML = '';
        elements.beforeAll.innerHTML = '<option></option>';
        elements.afterAll.innerHTML = '<option></option>';
        elements.beforeEach.innerHTML = '<option></option>';
        elements.afterEach.innerHTML = '<option></option>';
        var createOption = function(value) {
            var option = document.createElement('option');
            option.setAttribute('value', value);
            option.innerHTML = value;
            return option;
        };
        for (var i = 0; i < root.helpers.length; i++) {
            elements.actionName.appendChild(createOption(root.helpers[i]));
            elements.beforeAll.appendChild(createOption(root.helpers[i]));
            elements.afterAll.appendChild(createOption(root.helpers[i]));
            elements.beforeEach.appendChild(createOption(root.helpers[i]));
            elements.afterEach.appendChild(createOption(root.helpers[i]));
        }
    };

    var setMarker = function(name, active) {
        if (active) {
            document.body.setAttribute(name, '');
        } else {
            document.body.removeAttribute(name);
        }
    };

    var logWrite = function(data) {
        if (data.cmd === 'Done') setMarker('active-progress', false);
        elements.log.innerHTML += '<li>' +
            '<span class="label label-primary">' + data.cmd + '</span> ' +
            (data.title ? data.title : '') +
            (data.status === true && ' <span class="label label-success">OK</span>' ||
            data.status === false && ' <span class="label label-danger">FAIL</span>' || '') +
            '</li>';
    };

    var browserUpdate = function(imgUrl) {
        elements.img.src = imgUrl;
    };

    var createCommand = function(name) {
        return function() {
            socket.emit(name);
        };
    };

    var runSpecs = function() {
        elements.log.innerHTML = '';
        setMarker('active-progress', true);
        socket.emit('specs::run');
    };

    var recordSpecs = function() {
        setMarker('active-record', true);
    };

    var helpersList = function(helpers) {
        setMarker('helpers-loaded', true);
        root.helpers = helpers;
        updateInfo();
        updateHelpersSelect();
    };

    var specsList = function(specs) {
        setMarker('specs-loaded', true);
        root.suites = specs;
        updateInfo();
    };

    var clickHandler = function(e) {
        if (!document.body.hasAttribute('active-record')) return;
        var action = {
            action: 'mouseEvent',
            args: [ 'click', e.offsetX, e.offsetY ]
        };
        socket.emit('call::action', action);
        root.recordSpec.it.push(action);
        updateSuiteSource();
        elements.input.focus();
    };

    var keyPressHandler = function(e) {
        // if (!document.body.hasAttribute('active-record')) return;
        // var action = {
        //     action: 'keyboardEvent',
        //     args: [ 'keypress', e.keyCode ]
        // };
        // socket.emit('call::action', action);
        // root.recordSpec.it.push(action);
        // updateSuiteSource();
    };

    var keyUpHandler = function(e) {
        if (!document.body.hasAttribute('active-record')) return;
        var action = {
            action: 'keyboardEvent',
            args: [ 'keypress', keyCodeMap[e.key] || e.key ]
        };
        socket.emit('call::action', action);
        root.recordSpec.it.push(action);
        updateSuiteSource();
    };

    var keyDownHandler = function(e) {
        // if (!document.body.hasAttribute('active-record')) return;
        // var action = {
        //     action: 'keyboardEvent',
        //     args: [ 'keydown', e.keyCode ]
        // };
        // socket.emit('call::action', action);
        // root.recordSpec.it.push(action);
        // updateSuiteSource();
    };

    var saveSpecs = function() {
        socket.emit('specs::save', root.recordSuite);
        setMarker('active-record', false);
    };

    elements.view.appendChild(elements.img);
    elements.view.appendChild(elements.input);
    elements.loadHelpers.addEventListener('click', createCommand('helpers::load'));
    elements.loadSpecs.addEventListener('click', createCommand('specs::load'));
    elements.recordSpecs.addEventListener('click', recordSpecs);
    elements.runSpecs.addEventListener('click', runSpecs);
    elements.input.addEventListener('keypress', keyPressHandler);
    elements.input.addEventListener('keyup', keyUpHandler);
    elements.input.addEventListener('keydown', keyDownHandler);
    elements.img.addEventListener('click', clickHandler);
    elements.saveSpecs.addEventListener('click', saveSpecs);

    elements.suiteTitle.addEventListener('change', function() {
        root.recordSuite.title = this.value;
        updateSuiteSource();
    });
    elements.suiteFilename.addEventListener('change', function() {
        root.recordSuite.filename = this.value;
        updateSuiteSource();
    });
    elements.addSpec.addEventListener('click', function() {
        root.recordSpec = {};
        root.recordSuite.specs.push(root.recordSpec);
        root.recordSpec.title = elements.specTitle.value;
        root.recordSpec.it = [];
        updateSuiteSource();
    });
    elements.addAction.addEventListener('click', function() {
        if (!root.recordSpec) return;
        var action = {
            action: elements.actionName.value,
            args: [elements.actionArgument.value]
        };
        root.recordSpec.it.push(action);
        updateSuiteSource();
        socket.emit('call::action', action);
    });

    elements.beforeAll.addEventListener('change', function() {
        root.recordSuite.beforeAll = this.value;
        updateSuiteSource();
    });
    elements.afterAll.addEventListener('change', function() {
        root.recordSuite.afterAll = this.value;
        updateSuiteSource();
    });
    elements.beforeEach.addEventListener('change', function() {
        root.recordSuite.beforeEach = this.value;
        updateSuiteSource();
    });
    elements.afterEach.addEventListener('change', function() {
        root.recordSuite.afterEach = this.value;
        updateSuiteSource();
    });

    elements.beforeAllCall.addEventListener('click', function() {
        socket.emit('call::action', { action: root.recordSuite.beforeAll });
    });
    elements.afterAllCall.addEventListener('click', function() {
        socket.emit('call::action', { action: root.recordSuite.afterAll });
    });
    elements.beforeEachCall.addEventListener('click', function() {
        socket.emit('call::action', { action: root.recordSuite.beforeEach });
    });
    elements.afterEachCall.addEventListener('click', function() {
        socket.emit('call::action', { action: root.recordSuite.afterEach });
    });

    socket.on('browser::update', browserUpdate);
    socket.on('log::write', logWrite);
    socket.on('helpers::list', helpersList);
    socket.on('specs::list', specsList);

    updateInfo();

})();