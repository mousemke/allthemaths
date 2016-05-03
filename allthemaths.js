
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
         *
         */
        toLatex : function( from, to, _text )
        {
            const Nightmare     = require( 'nightmare' );

            return new Promise( function( resolve, reject )
            {
                var url = 'http://www.sciweavers.org/free-online-latex-equation-editor';

                var nightmare = new Nightmare();
                nightmare.goto( url )
                        .type( '#texEqnEditor', _text )
                        .click( 'input[type=submit].tex2img_iButton' )
                        .wait( '#iImgLoader > img' )
                        .evaluate( function()
                        {
                            var _i = document.querySelector( '#iImgLoader > img' );
                            return _i.src;
                        } )
                        .then( function( src )
                        {
                            resolve( src );
                        } );
            } ).then( _r => _r );
        },


        /**
         * Responses
         **/
        responses : function( from, to, text, botText )
        {
            var textSplit   = text.slice( 1 ).split( ' ' );
            var command     = textSplit[ 0 ];
            var _text       = textSplit.join( ' ' );

            switch ( command )
            {

                case 'domath':
                    botText = toLatex( from, to, _text );
                    break;
            }

            return botText;
        }
    };
};