
/**
 * allthemaths
 *
 * @module allthemaths
 *
 * @author  Mouse Braun <mouse@knoblau.ch>
 * @author  Andy Grey   <andeeeeeeeeeeee@letmeknowyouractualemailaddress.ninja>
 *
 * @for _val <git@github.com:mousemke/_val.git>
 *
 * @param {Object} _bot node irc bot instance
 * @param {Object} _modules all the modules (including this one)
 * @param {Object} userConfig config options
 */
const Nightmare     = require( 'nightmare' );


module.exports = function Allthemaths( _bot, _modules, userConfig )
{
    return {

        /**
         * ## toLatex
         *
         * translates the text to an image through a latex gneerator and
         * nightmare
         *
         * @param {String} from originating channel
         * @param {String} to originating user
         * @param {Sring} text original text minus command
         *
         * @return _String_ image src
         */
        toLatex : function( from, to, text )
        {
            var nightmare = new Nightmare();

            return new Promise( function( resolve, reject )
            {
                var url = 'http://www.codecogs.com/latex/eqneditor.php';

                return nightmare.goto( url )
                        .wait( '#latex_formula' )
                        .type( '#latex_formula', text )
                        .evaluate( function()
                        {
                            var _i = document.querySelector( '#equationview' );
                            return _i.src;
                        } )
                        .then( function( src )
                        {
                            var date = ( Date.now() + '' ).slice( 8 );
                            src = src.replace( /\?/, '?%5C200dpi%20' );
                            src = src.replace( /gif/, 'png.' + date );

                            resolve( src );
                        } );
            } ).then( function( _r )
            {
                nightmare.end();
                return _r;
            } );
        },


        /**
         * Responses
         **/
        responses : function( from, to, text, botText )
        {
            var textSplit   = text.split( ' ' );
            var command     = textSplit[ 0 ];
            var _text       = textSplit.slice( 1 ).join( ' ' );

            switch ( command )
            {
                case 'tex':
                    botText = this.toLatex( from, to, _text );
                    break;
            }

            return botText;
        }
    };
};