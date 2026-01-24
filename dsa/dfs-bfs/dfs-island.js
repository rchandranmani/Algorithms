const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

var numIslands = function(grid) {
    if (!grid.length) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    function dfs(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') return;
        grid[i][j] = '0';  // Mark as visited
        dfs(i - 1, j);     // Up
        dfs(i + 1, j);     // Down
        dfs(i, j - 1);     // Left
        dfs(i, j + 1);     // Right
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
};

console.log(numIslands(grid));