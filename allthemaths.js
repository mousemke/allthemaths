
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
module.exports = function Allthemaths( _bot, _modules, userConfig )
{
    return {

        /**
         * Responses
         **/
        responses : function( from, to, text, botText )
        {
            var command = text.slice( 1 ).split( ' ' )[ 0 ];

            switch ( command )
            {

                case 'dance':
                    var dancer = Math.floor( Math.random() * 80 );
                    if ( dancer === 3 )
                    {
                        botText = '└[∵┌]└[ ∵ ]┘[┐∵]┘';
                    }
                    else
                    {
                        botText = '♪┏(・o･)┛♪┗ ( ･o･) ┓♪';
                    }
                    break;
                case 'zzz':
                case 'sleep':
                    botText = '(- o - ) zzZ ☽';
                    break;
            }

            return botText;
        }
    };
};