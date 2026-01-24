const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

let visited = new Set();

function dfsTreeTravesal(node, graph, visited){
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node);

    for(const neighbour of graph[node]){
        if(!visited.has(neighbour)){
            dfsTreeTravesal(neighbour, graph, visited);
        }
    }
}

dfsTreeTravesal('A', graph, visited);