const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

function find_lowest_cost_node(costs) {
  let lowest_cost = Infinity;
  let lowest_cost_node = null;
  let node, cost;

  for (node in costs) {
    cost = costs[node];
    
    if (cost < lowest_cost && (processed.indexOf(node) === -1)) {
      lowest_cost = cost;
      lowest_cost_node = node;
    }
  }

  return lowest_cost_node;
}

var node = find_lowest_cost_node(costs);

while (node !== null) {
  let cost = costs[node];
  let neighbors = graph[node];
  let new_cost;

  Object.keys(neighbors).forEach(function (i) {
    new_cost = cost + neighbors[i];

    if (costs[i] > new_cost) {
      costs[i] = new_cost;
      parents[i] = node;
    }
  });

  processed = processed.concat(node);
  node = find_lowest_cost_node(costs);
}

console.log(costs);    // {'a': 5, 'b': 2, 'fin': 6}

