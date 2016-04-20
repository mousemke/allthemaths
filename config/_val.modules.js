/**
 * _val Modules
 *
 * watch your options property names.  their names should reflect their module, as
 * they are all moved into the same namespace for intercompatability.  All option will be transfered.
 */

 module.exports = {

    _8Ball       : {
        enabled : true,
        url     : './modules/_8ball.js'
    },


    Admin       : {
        enabled : true,
        url     : './modules/admin.js',
        options : {
            // adminMessage            : '5 minutes later test. well, this appears to work',
            adminMessageInterval    : 300000, // 5 min
            adminMessageChannels    : [ '#soc-bots' ] // optional default.  otherwise it falls back to all channels
        }
    },


    Anagramm    : {
        enabled : true, // requires module: words
        ini     : true,
        url     : './modules/anagramm.js',
        options : {
            anagrammLang            : 'de',
            anagrammChannel         : '#bots',
            anagrammDogePayout      : true, // requires module: doge
            anagrammDogeModifier    : 3,
            anagrammPointTimeout    : 86400000, // 24 hours
            newWordVoteNeeded       : 0.6,
            wordnikBaseUrl          : 'http://api.wordnik.com:80/v4/',
            translationBaseUrl      : 'http://mymemory.translated.net/api/',
            wordnikAPIKey           : '2b79afb305c66bf9bf00f026b7a02f49e85b963364a580810'
        }
    },


    Beats       : {
        enabled : true,
        url     : './modules/beats.js'
    },


    CAH        : {
        enabled : true,
        ini     : true,
        url     : './modules/cah.js',
        options : {
            cahRoom                     : '#cards_against_humanity',
            cahMaxMin                   : 5,
            cahMinPlayers               : 3
        }
    },


    Doge        : {
        enabled : true,
        ini     : true,
        url     : './modules/doge.js'
    },


    Foursquare        : {
        enabled : false,
        url     : './modules/_4sq.js',
        options : {
            foursquareID        : 'SHNVZY0J1NWKEGOFPYGMWSW34T0PY1H2UTWKYG1FRZI1YNNP',
            foursquareSecret    : 'MLFGVDTMUZBEWE2SPDRIHLALXWHAPPA52B2FAR2CWER1NQMQ',
            latLong             : '-88.987,-88.567',
            foursquareSection   : 'food', // food, drinks, coffee, shops, arts, outdoors, sights, trending, specials, nextVenues, topPicks
            foursquareRadius    : 2000 // in meters
        }
    },


    Nico        : {
        enabled : true,
        url     : './modules/nico.js'
    },


    PlainText   : {
        enabled : true,
        url     : './modules/plainText.js'
    },


    PopKey      : {
        enabled : true,
        url     : './modules/popkey.js',
        options : {
            popKeyComtentFilter : true,
            popKeyAPIKey        : 'cTB4RDpiZjIxZjYzNDQ1Njc0YTk1ZmI1OGQwNDU4MTk0OGY5YWVlM2E3NDA5Y2E4OWUwOGQ4ODQ0NWYwMTI3ODMzMDI2'
        }
    },


    RR          : {
        enabled : true,
        ini     : true,
        url     : './modules/rr.js',
    },


    Slack      : {
        enabled : false,
        url     : './modules/slack.js',
        options : {
            autoAuth                : true,

            slackChannel            : 'company-or-whatever',

            slackAPIKey             : 'you-ad-here',
            /**
             * auto join all available public channels.  overrides the channel
             * config option
             */
            autojoin                : true,

            /**
             * private channels to join
             */
            channelsPrivateJoin     : [ '#secretchannel1', '#secretchannel2' ],

            /**
             * public channels to not join
             */
            channelsPublicIgnore    : [],
        }
    },


    Twitch      : {
        enabled : false,
        url     : './modules/twitch.js',
        options : {
            autoAuth                : true,
            enablePM                : false,
            floodProtection         : true,
            floodProtectionDelay    : 1200
        }
    },


    Twitter     : {
        enabled : false,
        ini     : true,
        url     : './modules/twitter.js',
        options : {
            twitterRooms : {
                'mouse' : {
                    account             : '@mousemke',
                    users               : [ 'user1' ],
                    consumerKey         : '1234567890',
                    consumerSecret      : '1234567890',
                    accessToken         : '1234567890-1234567890',
                    accessTokenSecret   : '1234567890',
                },
                '#val-test' : {
                    account             : '@mousemke',
                    users               : [ 'user1' ],
                    consumerKey         : '1234567890',
                    consumerSecret      : '1234567890',
                    accessToken         : '1234567890-1234567890',
                    accessTokenSecret   : '1234567890',
                },
                '#_teamdoinstuff' : {
                    account             : '@teamdoinstuff',
                    users               : [ 'user1', 'user2', 'user3' ],
                    consumerKey         : '1234567890',
                    consumerSecret      : '1234567890',
                    accessToken         : '1234567890-1234567890',
                    accessTokenSecret   : '1234567890',
                }
            },
            twitterUsersBlackList       : [ 'userBad' ]
        }
    },


    Words       : {
        enabled : true,
        ini     : true,
        url     : './modules/words.js',
        options : {
            wordsLang               : 'en',
            wordsChannel            : '#bots',
            wordsDogePayout         : true, // requires module: doge
            wordsDogeModifier       : 1,
            wordsPointTimeout       : 86400000, // 24 hours
            newWordVoteNeeded       : 0.6,
            wordnikBaseUrl          : 'http://api.wordnik.com:80/v4/',
            translationBaseUrl      : 'http://mymemory.translated.net/api/',
            wordnikAPIKey           : '2b79afb305c66bf9bf00f026b7a02f49e85b963364a580810'
        }
    },


    XKCD        : {
        enabled : true,
        url     : './modules/xkcd.js',
        options : {
            appUrl      : 'http://xkcd-imgs.herokuapp.com/'
        }
    }
};