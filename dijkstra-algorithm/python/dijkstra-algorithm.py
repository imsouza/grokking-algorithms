# !/usr/bin/env python
# -*- coding: utf-8 -*-

graph = {}
graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["fin"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5

graph["fin"] = {}

costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = float("inf")

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

processed = []

def find_lowest_cost_node(costs):
  lowest_cost = float("inf")
  lowest_cost_node = None
  
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  
  return lowest_cost_node 
  
node = find_lowest_cost_node(costs)  

while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  
  for i in neighbors.keys():
    new_cost = cost + neighbors[i]
    if costs[i] > new_cost:
      costs[i] = new_cost
      parents[i] = node
  
  processed.append(node)
  node = find_lowest_cost_node(costs)

print costs    # {'a': 5, 'b': 2, 'fin': 6}

