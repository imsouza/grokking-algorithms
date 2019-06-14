const graph = {};

graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function personIsSeller(name) {
  return name[name.length - 1] === "m";
}

function search(name) {
  let searchQueue = [];
  let searched = [];
  
  searchQueue = searchQueue.concat(graph[name]);
  
  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        searched.push(person);
      }
    }
  }
  
  return false;
}

search("you");    // thom is a mango seller!

