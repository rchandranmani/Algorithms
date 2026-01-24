const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

function isLandCounter(grid) {
const rows = grid.length;
const columns = grid[0].length;
let islandCount = 0;

function dfs(r, c) {
  if (r <0 || r >= rows || c<0 || c >=columns || grid[r][c]=="0") return;
  grid[r][c] = "0" // marking as visited
  dfs(r-1, c);
  dfs(r+1, c);
  dfs(r, c-1);
  dfs(r, c+1);
}

for ( i =0 ;i < rows; i++ ){
  for (j=0 ; j < columns; j++){
    if(grid[i][j]=="1"){
        dfs(i, j);
        islandCount++;
    }
  }
}
return islandCount;
}

console.log('islandcount ', isLandCounter(grid));