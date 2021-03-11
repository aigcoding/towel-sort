
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }
  else {
  arr = [];
  for ( i = 0; i < matrix.length; i++) { 
    if ( i%2 == 0){ 
        for (j = 0; j < matrix[i].length; j++) {
        a = arr.unshift(matrix[i][j]);
        }
    }
        else {
            for (j = matrix[i].length-1; j >= 0; j--) {
                               
                arr.unshift(matrix[i][j]);
                }
        }
    }
    return arr.reverse();
  }
}
