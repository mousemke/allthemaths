/**
 * _val Modules
 *
 * watch your options property names.  their names should reflect their module, as
 * they are all moved into the same namespace for intercompatability.  All option will be transfered.
 */

 module.exports = {

    Allthemaths     : {
        enabled : true,
        ini     : true,
        url     : './node_modules/allthemaths/allthemaths.js',
        options : {
            wordsLang               : 'en',
            wordsChannel            : '#bots',
        }
    }
};