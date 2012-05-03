/*
 * Utility helper functions for the client side
 */

define( [], function(){

    //return utility functions
    return {
        /*
         * Computes the differenc between two arrays
         */
        arrayMinus : function( arrayA, arrayB ) {
            var result = [];
            for ( var i = 0; i < arrayA.length; i++ ) {
                if ( arrayA[i] ) {
                    var val = arrayA[i];
                    if ( arrayB.indexOf( val ) === -1 ) {
                        result.push( val );
                    }
                }
            }

            return result;
        },

        /*
         * Returns true if the two boundingbox overlap
         */
        overlap : function (boundingBoxA, boundingBoxB) {
            var result = false;

            if (boundingBoxA.x < boundingBoxB.x2 && boundingBoxA.x2 > boundingBoxB.x && boundingBoxA.y < boundingBoxB.y2 &&
                boundingBoxA.y2 > boundingBoxB.y) {
                result = true;
            }

            return result;
        },

        /*
         * Loads a CSS file dinamically
         */
        loadCSS : function( filePath ) {
            var css	= document.createElement('link');
            css.rel		= 'stylesheet';
            css.type	= 'text/css';
            css.media	= 'all';
            css.href	= filePath;
            document.getElementsByTagName("head")[0].appendChild(css);
        }
    };
});