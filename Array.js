/* Code Edited By David Clews */

/*
 * min
 * 
 * Get the lowest value from an array
 * 
 * @param {array} a THe array to get the lowest value from
 * @returns {integer}
 */
Array.min = function( a ){
    return Math.min.apply( Math, a );
};
